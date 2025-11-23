import React, { useMemo, useState } from 'react';
import { getCameraGear } from '../services/gemini';
import { AdvancedSettings } from '../types';
import { ADVANCED_OPTIONS } from '../constants';

interface Props {
  year: number;
  onChange: (year: number) => void;
  advancedSettings: AdvancedSettings;
  onAdvancedSettingsChange: (settings: AdvancedSettings) => void;
}

const TIMELINE_PRESETS = [
  { label: '1826', value: 1826, tooltip: "First Photo" },
  { label: '1860', value: 1860, tooltip: "Civil War / Tintype" },
  { label: '1920', value: 1920, tooltip: "Roaring 20s" },
  { label: '1950', value: 1950, tooltip: "Golden Age" },
  { label: '1980', value: 1980, tooltip: "Flash & Polaroid" },
  { label: '2000', value: 2000, tooltip: "Digital Dawn" },
  { label: 'Now', value: new Date().getFullYear(), tooltip: "Modern Era" },
];

const YearSelector: React.FC<Props> = ({ year, onChange, advancedSettings, onAdvancedSettingsChange }) => {
  const [isTimeTravel, setIsTimeTravel] = useState(false);
  const [showProSettings, setShowProSettings] = useState(false);
  
  // Get pedagogical data about the era, respecting overrides
  const eraGear = useMemo(() => getCameraGear(year, advancedSettings), [year, advancedSettings]);

  // Get historical context fact
  const getEraFact = (y: number) => {
    if (y > 2030) return "Future Era: Predicted imaging technology involving volumetric capture, neural interfaces, and AI-synthesized optics.";
    if (y >= 2020) return "Modern Era: High-resolution mirrorless cameras (50MP+), computational photography, and perfect LED lighting.";
    if (y >= 2000) return "The Digital Revolution: DSLRs replace film. The 'Megapixel Race' begins. Photos are crisp, clean, but digital.";
    if (y >= 1990) return "Late Film Era: Autofocus SLRs rule. The aesthetic is high-quality studio film, often with softbox lighting.";
    if (y >= 1980) return "The 80s: Direct flash, Polaroid instant film, and high saturation. Hair is big, fashion is bold.";
    if (y >= 1970) return "The 70s: Warm tones (Kodachrome), earthy colors, and manual focus SLRs like the Pentax K1000.";
    if (y >= 1960) return "The 60s: The Leica M3 era. Black & White street photography style or early color with a distinct vintage grain.";
    if (y >= 1950) return "Mid-Century: Medium format (Rolleiflex). Square crops, flashbulbs, and posed studio elegance.";
    if (y >= 1920) return "Early 20th Century: The Kodak Brownie brought photography to the masses. Lower contrast, softer focus.";
    if (y >= 1900) return "The Pictorialist Era: Photos looked like paintings. Soft focus, moody lighting, and glass plates.";
    if (y >= 1860) return "Civil War Era: Tintypes and Wet Plate Collodion. Subjects had to hold still for seconds. High contrast, chemical edges.";
    if (y >= 1840) return "Daguerreotype Era: Images on polished silver. Extremely sharp but required 30+ second exposures. No smiling allowed!";
    if (y >= 1826) return "The Dawn of Photography: Nicéphore Niépce's 'View from the Window at Le Gras'. 8-hour exposure on bitumen.";
    if (y < 1826) return "Time Travel Paradox: Photography didn't exist yet! Generating a hypothetical image using period-correct surroundings.";
    return "Time Travel Mode Active";
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleSettingChange = (key: keyof AdvancedSettings, value: string) => {
    onAdvancedSettingsChange({ ...advancedSettings, [key]: value });
  };

  const eraFact = getEraFact(year);

  // Helper to determine if a setting is overridden (not default)
  const isOverridden = (key: keyof AdvancedSettings) => advancedSettings[key] !== 'default';

  return (
    <div className="bg-lemon-50 border border-lemon-200 rounded-2xl p-6 mb-6 text-dark-900 shadow-sm relative overflow-hidden">
      {/* Decorative background icon */}
      <div className="absolute -right-6 -top-6 opacity-5 pointer-events-none">
        <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10">
        
        {/* Left: Controls */}
        <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-lemon-200 p-1.5 rounded-lg">
                        <svg className="w-5 h-5 text-lemon-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lemon-900 leading-none">Era & Fashion</h3>
                        <p className="text-xs text-lemon-700/70 mt-0.5">Influences clothes, hair, pose & camera</p>
                    </div>
                </div>

                <button 
                    onClick={() => setIsTimeTravel(!isTimeTravel)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1
                    ${isTimeTravel ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-lemon-700 border border-lemon-200 hover:bg-lemon-100'}`}
                >
                    {isTimeTravel ? '✨ Time Travel ON' : '⚡ Enable Time Travel'}
                </button>
            </div>
            
            <div className="flex items-center justify-center mb-6 py-2 bg-white/50 rounded-xl border border-lemon-100">
                 {isTimeTravel ? (
                     <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-lemon-800">YEAR:</span>
                        <input 
                            type="number" 
                            value={year} 
                            onChange={(e) => onChange(parseInt(e.target.value) || 0)}
                            className="text-4xl font-black text-purple-600 bg-transparent w-32 text-center focus:outline-none border-b-2 border-purple-300"
                        />
                     </div>
                 ) : (
                     <div className="text-4xl font-black text-lemon-600 tabular-nums tracking-tight">
                        {year}
                     </div>
                 )}
            </div>

            {!isTimeTravel && (
                <>
                    <input 
                        type="range" 
                        min="1826" 
                        max={new Date().getFullYear()} 
                        step="1" 
                        value={year}
                        onChange={handleSliderChange}
                        className="w-full h-2 bg-lemon-200 rounded-lg appearance-none cursor-pointer accent-lemon-500 hover:accent-lemon-600 transition-all mb-6"
                    />

                    <div className="flex justify-between gap-1 overflow-x-auto pb-2 scrollbar-hide">
                        {TIMELINE_PRESETS.map((preset) => (
                            <button
                                key={preset.label}
                                onClick={() => onChange(preset.value)}
                                title={preset.tooltip}
                                className={`
                                    px-3 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap flex-shrink-0
                                    ${Math.abs(year - preset.value) < 5 
                                        ? 'bg-lemon-500 text-white border-lemon-600 shadow-md transform scale-105' 
                                        : 'bg-white text-lemon-800 border-lemon-200 hover:border-lemon-400 hover:bg-lemon-50'
                                    }
                                `}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>

        {/* Right: Pedagogical Info Panel & Pro Settings */}
        <div className="w-full lg:w-96 flex flex-col gap-3">
            
            {/* Tech Specs Card */}
            <div className="bg-dark-900/5 rounded-xl p-4 border border-dark-900/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-lemon-800 opacity-70">Authentic {year} Gear</h4>
                    <button 
                        onClick={() => setShowProSettings(!showProSettings)}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border flex items-center gap-1 transition-colors
                        ${showProSettings 
                            ? 'bg-lemon-600 text-white border-lemon-600' 
                            : 'bg-white text-lemon-700 border-lemon-200 hover:border-lemon-400'
                        }`}
                    >
                        {showProSettings ? 'Hide Controls' : 'Customize Gear'}
                        <svg className={`w-3 h-3 transition-transform ${showProSettings ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                </div>
                
                <div className="space-y-3">
                    {/* Camera Body */}
                    <div className="flex items-start gap-3 group">
                        <span className="text-lemon-700 text-base">📷</span>
                        <div className="flex-1">
                            <span className={`text-xs font-bold block transition-colors ${isOverridden('camera') ? 'text-purple-600' : 'text-lemon-900'}`}>
                                {eraGear.camera}
                            </span>
                            <span className="text-[10px] text-lemon-700/70 block">Camera Body</span>
                        </div>
                        {showProSettings && ADVANCED_OPTIONS.cameras && (
                            <div className="w-32">
                                <select 
                                    value={advancedSettings.camera || 'default'}
                                    onChange={(e) => handleSettingChange('camera', e.target.value)}
                                    className="w-full text-[10px] bg-white border border-lemon-200 rounded p-1 text-lemon-900 outline-none focus:border-lemon-400"
                                >
                                    {ADVANCED_OPTIONS.cameras.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label.split(' (')[0]}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    
                    {/* Film/Sensor or ISO setting */}
                    <div className="flex items-start gap-3 group">
                        <span className="text-lemon-700 text-base">🎞️</span>
                        <div className="flex-1">
                             <span className={`text-xs font-bold block transition-colors ${isOverridden('filmStock') ? 'text-purple-600' : 'text-lemon-900'}`}>
                                {eraGear.iso}
                             </span>
                             <span className="text-[10px] text-lemon-700/70 block">Film / Sensor</span>
                        </div>
                        {showProSettings && (
                            <div className="w-32">
                                <select 
                                    value={advancedSettings.filmStock}
                                    onChange={(e) => handleSettingChange('filmStock', e.target.value)}
                                    className="w-full text-[10px] bg-white border border-lemon-200 rounded p-1 text-lemon-900 outline-none focus:border-lemon-400"
                                >
                                    {ADVANCED_OPTIONS.filmStocks.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label.split(' (')[0]}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Lighting */}
                    <div className="flex items-start gap-3 group">
                        <span className="text-lemon-700 text-base">💡</span>
                        <div className="flex-1">
                             <span className={`text-xs font-bold block capitalize transition-colors ${isOverridden('lighting') ? 'text-purple-600' : 'text-lemon-900'}`}>
                                {eraGear.lighting}
                             </span>
                             <span className="text-[10px] text-lemon-700/70 block">Era Lighting</span>
                        </div>
                        {showProSettings && (
                            <div className="w-32">
                                <select 
                                    value={advancedSettings.lighting}
                                    onChange={(e) => handleSettingChange('lighting', e.target.value)}
                                    className="w-full text-[10px] bg-white border border-lemon-200 rounded p-1 text-lemon-900 outline-none focus:border-lemon-400"
                                >
                                    {ADVANCED_OPTIONS.lighting.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label.split(' (')[0]}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Extra Controls when Expanded */}
                    {showProSettings && (
                        <div className="pt-3 mt-3 border-t border-lemon-900/5 space-y-3 animate-in slide-in-from-top-2">
                             {/* Lens */}
                             <div className="flex items-start gap-3">
                                <span className="text-lemon-700 text-base">🔍</span>
                                <div className="flex-1">
                                    <div className="text-[10px] text-lemon-700/70 mb-1">Lens</div>
                                    <select 
                                        value={advancedSettings.lens}
                                        onChange={(e) => handleSettingChange('lens', e.target.value)}
                                        className="w-full text-xs bg-white border border-lemon-200 rounded p-1.5 text-lemon-900 outline-none focus:border-lemon-400 font-medium"
                                    >
                                        {ADVANCED_OPTIONS.lenses.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                             </div>

                             {/* Aperture */}
                             <div className="flex items-start gap-3">
                                <span className="text-lemon-700 text-base">⭕</span>
                                <div className="flex-1">
                                    <div className="text-[10px] text-lemon-700/70 mb-1">Aperture (Blur)</div>
                                    <select 
                                        value={advancedSettings.aperture}
                                        onChange={(e) => handleSettingChange('aperture', e.target.value)}
                                        className="w-full text-xs bg-white border border-lemon-200 rounded p-1.5 text-lemon-900 outline-none focus:border-lemon-400 font-medium"
                                    >
                                        {ADVANCED_OPTIONS.apertures.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                             </div>

                             {/* Angle */}
                             <div className="flex items-start gap-3">
                                <span className="text-lemon-700 text-base">📐</span>
                                <div className="flex-1">
                                    <div className="text-[10px] text-lemon-700/70 mb-1">Perspective</div>
                                    <select 
                                        value={advancedSettings.angle}
                                        onChange={(e) => handleSettingChange('angle', e.target.value)}
                                        className="w-full text-xs bg-white border border-lemon-200 rounded p-1.5 text-lemon-900 outline-none focus:border-lemon-400 font-medium"
                                    >
                                        {ADVANCED_OPTIONS.angles.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                             </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Historical Context Card (Collapses when settings open to save space, or moves down) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-lemon-200/60 shadow-sm">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-lemon-800 mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Historical Context
                </h4>
                <p className="text-xs text-lemon-900 leading-relaxed italic">
                    "{eraFact}"
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default YearSelector;