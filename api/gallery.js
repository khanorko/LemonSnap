import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME,
    });

    const response = await s3Client.send(command);

    const contents = response.Contents || [];
    contents.sort((a, b) => (b.LastModified?.getTime() || 0) - (a.LastModified?.getTime() || 0));

    const images = contents
      .filter(item => item.Key && (
        item.Key.endsWith('.png') ||
        item.Key.endsWith('.jpg') ||
        item.Key.endsWith('.jpeg') ||
        item.Key.endsWith('.webp')
      ))
      .map(item => {
        const url = process.env.R2_PUBLIC_URL
          ? `${process.env.R2_PUBLIC_URL}/${item.Key}`
          : `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${process.env.R2_BUCKET_NAME}/${item.Key}`;

        return {
          url: url,
          key: item.Key,
          lastModified: item.LastModified,
        };
      });

    res.status(200).json({ images });
  } catch (error) {
    console.error('Gallery fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch gallery' });
  }
}
