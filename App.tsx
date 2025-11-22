import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import StyleGrid from './components/StyleGrid';
import YearSelector from './components/YearSelector';
import ResultModal from './components/ResultModal';
import { STYLES } from './constants';
import { generateHeadshot } from './services/gemini';
import { GeneratedResult, AppMode, AdvancedSettings } from './types';

function App() {
  const [mode, setMode] = useState<AppMode>('headshot');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedStyleId, setSelectedStyleId] = useState<string | null>(null);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Advanced Settings State
  const [advancedSettings, setAdvancedSettings] = useState<AdvancedSettings>({
    angle: 'default',
    lens: 'default',
    aperture: 'default',
    lighting: 'default',
    filmStock: 'default'
  });

  const handleMagicEditorClick = () => {
    alert("Magic Editor is currently in beta testing and will be available in the next update! 🍋");
  };

  const handleGenerate = async () => {
    if (!uploadedFile) {
        setError("Please upload an image first.");
        return;
    }
    
    setError(null);
    setIsGenerating(true);

    try {
      let imageUrl = '';
      let styleTitle = '';

      if (!selectedStyleId) {
          setError("Please select a style.");
          setIsGenerating(false);
          return;
      }
      const style = STYLES.find(s => s.id === selectedStyleId);
      if (!style) throw new Error("Style not found");
      styleTitle = style.title;
      
      // Pass advanced settings and selected year to generator
      imageUrl = await generateHeadshot(uploadedFile, style.desc, year, advancedSettings);

      setResult({
        id: Date.now().toString(),
        imageUrl,
        styleId: selectedStyleId || 'custom',
        promptUsed: style.desc,
        timestamp: Date.now(),
        isPaid: false
      });
    } catch (err: any) {
      console.error("Generation error:", err);
      setError(err.message || "Something went wrong during generation.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (isPaid: boolean) => {
    if (!result) return;
    
    // Mock download process
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = `lemonsnap_${result.styleId}_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (isPaid) {
        alert("Thank you for your purchase! (Mock Payment)");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lemon-400 rounded-lg flex items-center justify-center text-black font-bold text-xl">L</div>
            <span className="font-bold text-xl tracking-tight"><span className="text-white">Lemon</span><span className="text-lemon-400">Snap</span></span>
          </div>
          <div className="flex items-center gap-4">
             <button className="text-sm text-gray-400 hover:text-white transition-colors">My Gallery</button>
             <div className="w-px h-4 bg-white/20"></div>
             <div className="flex items-center gap-1 text-lemon-400 text-sm font-medium">
                <span>50 Credits</span>
             </div>
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 md:p-8 max-w-5xl mx-auto w-full">
        
        {/* Hero Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Professional AI Headshots
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Turn your selfies into professional photos in seconds. Choose a style, upload, and let AI do the rest.
          </p>
        </div>

        {/* Toggle Mode (Visual Only for now) */}
        <div className="flex justify-center mb-10">
          <div className="glass-panel p-1 rounded-xl inline-flex">
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all bg-lemon-400 text-black shadow-lg`}
            >
              Headshot Generator
            </button>
            <button 
              onClick={handleMagicEditorClick}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all text-gray-400 hover:text-white`}
            >
              Magic Editor 🍋 <span className="text-[10px] bg-dark-700 px-1.5 py-0.5 rounded ml-1 text-gray-300">SOON</span>
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <ImageUploader 
          onUpload={setUploadedFile} 
          currentImage={uploadedFile}
        />

        {/* Controls Section */}
        <div className="mb-12 space-y-8">
          
            <div className="space-y-6">
               
               {/* Year Selector (Pedagogical) + Pro Controls */}
               <div className="pt-4">
                 <YearSelector 
                    year={year} 
                    onChange={setYear}
                    advancedSettings={advancedSettings}
                    onAdvancedSettingsChange={setAdvancedSettings}
                 />
               </div>

               <div className="flex items-center justify-between mt-8">
                  {/* Style Header - Category Selector is inside StyleGrid */}
               </div>
               
               <StyleGrid selectedId={selectedStyleId} onSelect={setSelectedStyleId} />
            </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-center text-sm animate-in fade-in">
                {error}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !uploadedFile}
            className={`
              w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all transform active:scale-[0.99]
              flex items-center justify-center gap-3
              ${isGenerating || !uploadedFile 
                ? 'bg-dark-700 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-lemon-400 to-lemon-600 text-black hover:from-lemon-300 hover:to-lemon-500 shadow-lemon-500/20'
              }
            `}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing with 🍋 Snap...
              </>
            ) : (
              <>
                <span>Generate Headshots</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </>
            )}
          </button>
        </div>
        
      </main>

      {/* Result Modal */}
      {result && (
        <ResultModal 
          imageUrl={result.imageUrl} 
          styleTitle={STYLES.find(s => s.id === result.styleId)?.title || 'Custom'}
          onClose={() => setResult(null)}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}

export default App;