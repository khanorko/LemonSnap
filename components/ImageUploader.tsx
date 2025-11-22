import React, { useState, useRef, useEffect } from 'react';

interface Props {
  onUpload: (file: File) => void;
  currentImage: File | null;
}

const ImageUploader: React.FC<Props> = ({ onUpload, currentImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (currentImage) {
      const url = URL.createObjectURL(currentImage);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [currentImage]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
      />
      
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative aspect-[4/5] md:aspect-[16/9] rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden group
          ${isDragging ? 'border-lemon-400 bg-lemon-400/10' : 'border-gray-600 hover:border-lemon-400/50 bg-dark-800'}
        `}
      >
        {previewUrl ? (
          <>
            <img 
              src={previewUrl} 
              alt="Upload preview" 
              className="w-full h-full object-cover object-[center_25%] opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                 Click to Change Image
               </div>
            </div>
            <div className="absolute top-4 right-4 bg-lemon-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              PRIMARY
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 mb-4 rounded-full bg-dark-700 flex items-center justify-center text-lemon-400 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Upload Reference Photo</h3>
            <p className="text-sm text-gray-400">Drag & drop or click to browse</p>
            <p className="text-xs text-gray-500 mt-4">For best results, use a clear, well-lit selfie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;