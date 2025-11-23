import React, { useState, useRef, useEffect } from 'react';

interface Props {
  onUpload: (files: File[]) => void;
  currentImages: File[];
}

const ImageUploader: React.FC<Props> = ({ onUpload, currentImages }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Cleanup preview URLs on unmount or change
  useEffect(() => {
    const urls = currentImages.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [currentImages]);

  const handleDragOver = (e: React.DragEvent, index: number = 0) => {
    e.preventDefault();
    setIsDragging(true);
    setDragIndex(index);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
    setDragIndex(null);
  };

  const handleDrop = (e: React.DragEvent, index: number = 0) => {
    e.preventDefault();
    setIsDragging(false);
    setDragIndex(null);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFile = e.dataTransfer.files[0];
      handleNewFile(newFile, index);
    }
  };

  const handleNewFile = (file: File, index: number) => {
    const newImages = [...currentImages];
    if (index < newImages.length) {
        // Replace existing
        newImages[index] = file;
    } else {
        // Add new if limit not reached (max 3)
        if (newImages.length < 3) {
            newImages.push(file);
        }
    }
    onUpload(newImages);
  };

  const removeImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newImages = currentImages.filter((_, i) => i !== index);
    onUpload(newImages);
  };

  const triggerFileInput = (index: number) => {
    if (fileInputRef.current) {
        // Store index in dataset to retrieve in change handler if needed, 
        // but simpler to just clear and use a closure if we had multiple inputs.
        // Here we'll just use the single input and manage state carefully.
        fileInputRef.current.setAttribute('data-index', index.toString());
        fileInputRef.current.click();
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const indexStr = e.target.getAttribute('data-index');
    const index = indexStr ? parseInt(indexStr, 10) : 0;
    
    if (e.target.files?.[0]) {
        handleNewFile(e.target.files[0], index);
    }
    // Reset input
    e.target.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={onFileInputChange}
      />
      
      <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
          
          {/* Main Primary Image */}
          <div
            onClick={() => triggerFileInput(0)}
            onDragOver={(e) => handleDragOver(e, 0)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 0)}
            className={`
              relative w-full md:w-2/3 h-96 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden group
              ${isDragging && dragIndex === 0 ? 'border-lemon-400 bg-lemon-400/10' : 'border-gray-600 hover:border-lemon-400/50 bg-dark-800'}
            `}
          >
            {previewUrls[0] ? (
              <>
                <img 
                  src={previewUrls[0]} 
                  alt="Primary Upload" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Change Image</span>
                </div>
                <div className="absolute top-3 left-3 bg-lemon-400 text-black text-xs font-bold px-2 py-1 rounded shadow-lg">
                  PRIMARY (50%)
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 mb-3 rounded-full bg-dark-700 flex items-center justify-center text-lemon-400 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Upload Main Photo</h3>
                <p className="text-xs text-gray-400 mt-1">Drag & drop or click</p>
              </div>
            )}
          </div>

          {/* Side Images Column */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 h-96">
             {/* Slot 2 */}
             <div className="relative w-full flex-1 rounded-xl border-2 border-dashed border-gray-700 bg-dark-800 overflow-hidden hover:border-gray-500 transition-colors">
                 {previewUrls[1] ? (
                     <div className="w-full h-full relative group cursor-pointer" onClick={() => triggerFileInput(1)}>
                        <img src={previewUrls[1]} alt="Angle 1" className="w-full h-full object-cover" />
                        <button 
                            onClick={(e) => removeImage(1, e)}
                            className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                     </div>
                 ) : (
                    <button 
                        onClick={() => triggerFileInput(1)}
                        className="w-full h-full flex flex-col items-center justify-center text-gray-500 hover:text-lemon-400 hover:bg-white/5 transition-all"
                        disabled={!previewUrls[0]}
                    >
                        <div className="bg-dark-700 p-2 rounded-full mb-1">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-wide">Add Side Angle</span>
                    </button>
                 )}
             </div>

             {/* Slot 3 */}
             <div className="relative w-full flex-1 rounded-xl border-2 border-dashed border-gray-700 bg-dark-800 overflow-hidden hover:border-gray-500 transition-colors">
                 {previewUrls[2] ? (
                     <div className="w-full h-full relative group cursor-pointer" onClick={() => triggerFileInput(2)}>
                        <img src={previewUrls[2]} alt="Angle 2" className="w-full h-full object-cover" />
                        <button 
                            onClick={(e) => removeImage(2, e)}
                            className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                     </div>
                 ) : (
                    <button 
                        onClick={() => triggerFileInput(2)}
                        className="w-full h-full flex flex-col items-center justify-center text-gray-500 hover:text-lemon-400 hover:bg-white/5 transition-all"
                        disabled={!previewUrls[1]}
                    >
                        <div className="bg-dark-700 p-2 rounded-full mb-1">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-wide">Add 3/4 View</span>
                    </button>
                 )}
             </div>
          </div>
      </div>
      
      {/* Helper Text */}
      <div className="text-center mt-3">
          <p className="text-xs text-gray-500">
              <span className="text-lemon-400 font-bold">Pro Tip:</span> Uploading multiple angles (Front, Side, 3/4) significantly improves face matching accuracy.
          </p>
      </div>
    </div>
  );
};

export default ImageUploader;