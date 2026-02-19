import React, { useEffect, useState } from 'react';
import { getGallery, GalleryImage } from '../services/storage';

interface GalleryModalProps {
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ onClose }) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const gallery = await getGallery();
        setImages(gallery);
        setError(null);
      } catch (err) {
        setError("Failed to load gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  const handleDownload = (url: string, key: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = key;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-dark-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-lemon-400">My</span> Gallery
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin h-8 w-8 border-4 border-lemon-400 border-t-transparent rounded-full"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 mx-auto mb-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-400 text-lg mb-2">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-lemon-400 hover:text-lemon-300 transition-colors"
              >
                Refresh page
              </button>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg mb-2">Your gallery is empty.</p>
              <p className="text-sm">Generate some headshots to see them here!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img) => (
                <div key={img.key} className="group relative aspect-square bg-dark-800 rounded-xl overflow-hidden border border-white/5">
                  <img 
                    src={img.url} 
                    alt={img.key}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                        onClick={() => window.open(img.url, '_blank')}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                        title="View Full Size"
                        aria-label="View image in full size"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleDownload(img.url, img.key)}
                        className="p-2 bg-lemon-400 hover:bg-lemon-300 rounded-lg text-black transition-colors"
                        title="Download"
                        aria-label="Download image"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;

