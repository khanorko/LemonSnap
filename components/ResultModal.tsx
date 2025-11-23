import React from 'react';

interface Props {
  imageUrl: string;
  styleTitle: string;
  onClose: () => void;
  onDownload: (paid: boolean) => void;
}

const ResultModal: React.FC<Props> = ({ imageUrl, styleTitle, onClose, onDownload }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-dark-800 border border-dark-700 rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Image Section */}
        <div className="w-full md:w-2/3 bg-black flex items-center justify-center relative group min-h-[400px]">
           {/* Chequerboard pattern for transparency feeling if needed, though usually opaque */}
           <div className="absolute inset-0 opacity-20" 
                style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
           </div>
           
           {imgError ? (
               <div className="z-10 text-center p-8 text-gray-400">
                   <svg className="w-12 h-12 mx-auto mb-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                   <p>Failed to display image.</p>
                   <p className="text-xs mt-2">The image data might be corrupted or too large.</p>
               </div>
           ) : (
               <img 
                src={imageUrl} 
                alt="Generated Result" 
                className="max-h-[70vh] md:max-h-[80vh] object-contain z-10" 
                onError={() => setImgError(true)}
               />
           )}
           
           <div className="absolute top-4 left-4 z-20">
             <span className="px-3 py-1 bg-black/60 backdrop-blur text-white text-xs font-bold rounded-full border border-white/10">
               {styleTitle}
             </span>
           </div>
        </div>

        {/* Action Sidebar */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-dark-800 border-l border-dark-700">
          <div>
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">Your Headshot</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 text-lemon-400">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-sm text-gray-300">High Resolution (4K)</p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 text-lemon-400">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-sm text-gray-300">Commercial Usage Rights</p>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 text-lemon-400">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-sm text-gray-300">No Watermark</p>
                </div>
            </div>
          </div>

          <div className="space-y-3">
            <button 
                onClick={() => onDownload(true)}
                className="w-full py-4 bg-gradient-to-r from-lemon-400 to-lemon-500 hover:from-lemon-300 hover:to-lemon-400 text-black font-bold rounded-xl shadow-lg shadow-lemon-500/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
                <span>Unlock & Download</span>
                <span className="bg-black/10 px-2 py-0.5 rounded text-xs">$4.99</span>
            </button>
            
            <button 
                onClick={() => onDownload(false)}
                className="w-full py-3 bg-dark-700 hover:bg-dark-600 text-gray-300 font-medium rounded-xl transition-all text-sm flex items-center justify-center gap-2"
            >
                <span>Free Watermarked Preview</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultModal;