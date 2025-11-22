import React, { useState } from 'react';
import { ADVANCED_OPTIONS } from '../constants';
import { AdvancedSettings } from '../types';

interface Props {
  settings: AdvancedSettings;
  onChange: (newSettings: AdvancedSettings) => void;
}

const AdvancedControls: React.FC<Props> = ({ settings, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: keyof AdvancedSettings, value: string) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
            flex items-center gap-2 text-sm font-medium transition-colors mb-4
            ${isOpen ? 'text-lemon-400' : 'text-gray-400 hover:text-white'}
        `}
      >
        <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {isOpen ? 'Hide Pro Camera Settings' : 'Show Pro Camera Settings'}
      </button>

      {isOpen && (
        <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in slide-in-from-top-2 duration-200">
            
            {/* Angle Selection */}
            <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Angle & Perspective</label>
                <div className="relative">
                    <select 
                        value={settings.angle}
                        onChange={(e) => handleChange('angle', e.target.value)}
                        className="w-full bg-dark-900 border border-dark-600 text-white text-sm rounded-lg p-2.5 appearance-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 outline-none transition-all"
                    >
                        {ADVANCED_OPTIONS.angles.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>

            {/* Lens Selection */}
            <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Lens (Focal Length)</label>
                <div className="relative">
                    <select 
                        value={settings.lens}
                        onChange={(e) => handleChange('lens', e.target.value)}
                        className="w-full bg-dark-900 border border-dark-600 text-white text-sm rounded-lg p-2.5 appearance-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 outline-none transition-all"
                    >
                        {ADVANCED_OPTIONS.lenses.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>

            {/* Aperture Selection */}
            <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Aperture (Blur)</label>
                <div className="relative">
                    <select 
                        value={settings.aperture}
                        onChange={(e) => handleChange('aperture', e.target.value)}
                        className="w-full bg-dark-900 border border-dark-600 text-white text-sm rounded-lg p-2.5 appearance-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 outline-none transition-all"
                    >
                        {ADVANCED_OPTIONS.apertures.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>

            {/* Lighting Selection */}
            <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Lighting Setup</label>
                <div className="relative">
                    <select 
                        value={settings.lighting}
                        onChange={(e) => handleChange('lighting', e.target.value)}
                        className="w-full bg-dark-900 border border-dark-600 text-white text-sm rounded-lg p-2.5 appearance-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 outline-none transition-all"
                    >
                        {ADVANCED_OPTIONS.lighting.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>

             {/* Film/ISO Selection */}
             <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold">Film Stock & ISO</label>
                <div className="relative">
                    <select 
                        value={settings.filmStock}
                        onChange={(e) => handleChange('filmStock', e.target.value)}
                        className="w-full bg-dark-900 border border-dark-600 text-white text-sm rounded-lg p-2.5 appearance-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 outline-none transition-all"
                    >
                        {ADVANCED_OPTIONS.filmStocks.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedControls;
