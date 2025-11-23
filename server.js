import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001;

// Configure CORS to allow requests from the frontend (Vite default port 5173 or 3000)
app.use(cors());
app.use(express.json());

// Configure Multer for handling file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error("Error: Missing R2 configuration in .env file");
  process.exit(1);
}

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// --- API Endpoints ---

// Upload Endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filename = req.body.filename || req.file.originalname;
  const mimeType = req.file.mimetype;

  try {
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: filename,
      Body: req.file.buffer,
      ContentType: mimeType,
    });

    await s3Client.send(command);

    // Construct public URL
    const publicUrl = R2_PUBLIC_URL 
        ? `${R2_PUBLIC_URL}/${filename}`
        : `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${filename}`; // Fallback (likely private)

    res.json({ 
      success: true, 
      url: publicUrl,
      filename: filename 
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Gallery List Endpoint
app.get('/api/gallery', async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
    });

    const response = await s3Client.send(command);
    
    // Sort by last modified (newest first)
    const contents = response.Contents || [];
    contents.sort((a, b) => (b.LastModified?.getTime() || 0) - (a.LastModified?.getTime() || 0));

    const images = contents
      .filter(item => item.Key && (item.Key.endsWith('.png') || item.Key.endsWith('.jpg') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.webp')))
      .map(item => {
         const url = R2_PUBLIC_URL 
            ? `${R2_PUBLIC_URL}/${item.Key}`
            : `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${item.Key}`;
         
         return {
             url: url,
             key: item.Key,
             lastModified: item.LastModified
         };
      });

    res.json({ images });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    res.status(500).json({ error: 'Failed to fetch gallery' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});

