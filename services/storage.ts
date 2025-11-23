import { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.warn("Missing Cloudflare R2 configuration environment variables.");
}

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID || "",
    secretAccessKey: R2_SECRET_ACCESS_KEY || "",
  },
});

export interface GalleryImage {
  key: string;
  url: string;
  lastModified: Date | undefined;
}

export const uploadHeadshot = async (imageBlob: Blob, filename: string): Promise<string> => {
  if (!R2_BUCKET_NAME) throw new Error("R2_BUCKET_NAME not configured");

  // Convert Blob to ArrayBuffer
  const arrayBuffer = await imageBlob.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await S3.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: filename,
      Body: buffer,
      ContentType: imageBlob.type,
    })
  );

  return getPublicUrl(filename);
};

export const getGallery = async (): Promise<GalleryImage[]> => {
  if (!R2_BUCKET_NAME) return [];

  try {
    const data = await S3.send(
      new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME,
      })
    );

    if (!data.Contents) return [];

    return data.Contents
        .sort((a, b) => (b.LastModified?.getTime() || 0) - (a.LastModified?.getTime() || 0))
        .map((item) => ({
            key: item.Key || "",
            url: getPublicUrl(item.Key || ""),
            lastModified: item.LastModified,
        }));
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
};

export const getPublicUrl = (key: string): string => {
  if (R2_PUBLIC_URL) {
    // Remove trailing slash if present
    const baseUrl = R2_PUBLIC_URL.endsWith('/') ? R2_PUBLIC_URL.slice(0, -1) : R2_PUBLIC_URL;
    return `${baseUrl}/${key}`;
  }
  // Fallback if no public URL is configured (won't work for private buckets without signing)
  return `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${key}`;
};

// Helper to convert Data URL to Blob
export const dataURLToBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

