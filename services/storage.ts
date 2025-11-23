// Modified storage service to use Backend API instead of direct S3 calls
const BACKEND_URL = 'http://localhost:3001/api';

export interface GalleryImage {
  key: string;
  url: string;
  lastModified: Date | undefined;
}

export const uploadHeadshot = async (imageBlob: Blob, filename: string): Promise<string> => {
  const formData = new FormData();
  formData.append('file', imageBlob, filename);
  formData.append('filename', filename);

  const response = await fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Upload failed');
  }

  const data = await response.json();
  return data.url;
};

export const getGallery = async (): Promise<GalleryImage[]> => {
  try {
    const response = await fetch(`${BACKEND_URL}/gallery`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch gallery');
    }

    const data = await response.json();
    
    // Ensure dates are Date objects
    return data.images.map((img: any) => ({
        ...img,
        lastModified: img.lastModified ? new Date(img.lastModified) : undefined
    }));
  } catch (error) {
    console.error("Error fetching gallery from backend:", error);
    return [];
  }
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
