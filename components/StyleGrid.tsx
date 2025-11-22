import React, { useState, useMemo, useRef } from 'react';
import { STYLES, CATEGORIES } from '../constants';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CATEGORY_CONFIG: Record<string, { icon: string; shortLabel: string }> = {
  "Professional & Personal Branding": { icon: "💼", shortLabel: "Professional" },
  "Creative & Artsy": { icon: "🎨", shortLabel: "Creative" },
  "Retro & Analog": { icon: "📸", shortLabel: "Retro" },
  "Futuristic & Cyber": { icon: "🤖", shortLabel: "Cyber" },
  "Pop Culture & Fun": { icon: "🕹️", shortLabel: "Pop Culture" },
  "Rockstar & Rebellion": { icon: "🎸", shortLabel: "Rockstar" },
  "Animal Kingdom": { icon: "🐾", shortLabel: "Animals" }
};

type SortOption = 'default' | 'fun_desc' | 'fun_asc';

const StyleGrid: React.FC<Props> = ({ selectedId, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [isMixedMode, setIsMixedMode] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredStyles = useMemo(() => {
    let styles = [];
    
    if (isMixedMode) {
      // Create a copy to avoid mutating constant, then shuffle
      styles = [...STYLES].sort(() => Math.random() - 0.5);
    } else {
      styles = STYLES.filter(style => style.category === activeCategory);
    }

    // Apply Sorting
    if (sortBy === 'fun_desc') {
        styles.sort((a, b) => b.funFactor - a.funFactor);
    } else if (sortBy === 'fun_asc') {
        styles.sort((a, b) => a.funFactor - b.funFactor);
    }
    // 'default' keeps original order (or random order if mixed)

    return styles;
  }, [activeCategory, isMixedMode, sortBy]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setIsMixedMode(false);
  };

  const toggleMixedMode = () => {
    setIsMixedMode(true);
    setActiveCategory('Mixed');
  };

  return (
    <div className="space-y-6">
        {/* Segmented Category Selector */}
        <div className="relative group/scroll">
            <div 
                ref={scrollContainerRef}
                className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar mask-linear-fade scroll-smooth"
            >
                {CATEGORIES.map(category => {
                    const config = CATEGORY_CONFIG[category];
                    const isActive = activeCategory === category && !isMixedMode;
                    
                    return (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`
                                relative flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 border flex-shrink-0 group
                                ${isActive 
                                    ? 'bg-dark-800 border-lemon-400/50 text-white shadow-[0_4px_20px_-5px_rgba(250,204,21,0.3)]' 
                                    : 'bg-dark-800/40 border-transparent text-gray-400 hover:bg-dark-700 hover:text-gray-200'
                                }
                            `}
                        >
                            <span className={`text-lg filter ${isActive ? 'grayscale-0' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all'}`}>
                                {config?.icon || '✨'}
                            </span>
                            <span className={`font-bold text-sm whitespace-nowrap ${isActive ? 'text-lemon-400' : ''}`}>
                                {config?.shortLabel || category}
                            </span>
                            
                            {/* Active Indicator Line */}
                            {isActive && (
                                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-lemon-400 rounded-t-full shadow-[0_-2px_8px_rgba(250,204,21,0.6)]"></div>
                            )}
                        </button>
                    );
                })}

                {/* Mixed Mode Button */}
                <button 
                    onClick={toggleMixedMode}
                    className={`
                        relative flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 border flex-shrink-0 ml-2
                        ${isMixedMode
                            ? 'bg-purple-900/40 border-purple-500 text-white shadow-[0_4px_20px_-5px_rgba(168,85,247,0.4)]' 
                            : 'bg-dark-800/40 border-transparent text-purple-400 hover:bg-dark-700'
                        }
                    `}
                >
                    <span className="text-lg">⚡</span>
                    <span className="font-bold text-sm whitespace-nowrap">Random Mix</span>
                    {isMixedMode && (
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500 rounded-t-full shadow-[0_-2px_8px_rgba(168,85,247,0.6)]"></div>
                    )}
                </button>
            </div>
            
            {/* Scroll Fade Indicators (Visual hint only) */}
            <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Controls Header: Title & Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
                <span className="text-gray-400">Browsing:</span>
                <span className={isMixedMode ? 'text-purple-400 font-bold' : 'text-lemon-400 font-bold'}>
                    {activeCategory === 'Mixed' ? 'Random Selection' : activeCategory}
                </span>
                <span className="text-xs bg-dark-800 px-2 py-0.5 rounded-full text-gray-500 border border-white/5">
                    {filteredStyles.length}
                </span>
            </h3>

            {/* Secondary Dropdown: Sort */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider hidden sm:block">Sort by:</span>
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="appearance-none bg-dark-800 border border-dark-600 text-xs font-bold text-white rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:border-lemon-400 focus:ring-1 focus:ring-lemon-400 transition-all hover:bg-dark-700 cursor-pointer"
                    >
                        <option value="default">Default Order</option>
                        <option value="fun_desc">Most Fun 🔥</option>
                        <option value="fun_asc">Most Professional 👔</option>
                    </select>
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in slide-in-from-bottom-4 duration-500">
        {filteredStyles.map((style) => {
            const isSelected = selectedId === style.id;
            return (
            <button
                key={style.id}
                onClick={() => onSelect(style.id)}
                className={`
                relative group p-5 rounded-xl text-left transition-all duration-300 border h-full flex flex-col overflow-hidden
                ${isSelected 
                    ? 'bg-gradient-to-br from-lemon-900/30 to-black border-lemon-400 ring-1 ring-lemon-400 shadow-[0_0_20px_rgba(250,204,21,0.15)] scale-[1.02]' 
                    : 'bg-dark-800 border-dark-700 hover:border-gray-500 hover:bg-dark-700'
                }
                `}
            >
                {/* Header with Palette and Title */}
                <div className="flex items-start justify-between mb-2 relative z-10">
                    <div>
                        <div className="flex gap-1.5 mb-2">
                        {style.moodPalette.map((color, idx) => (
                            <div 
                            key={idx} 
                            className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-white/10" 
                            style={{ backgroundColor: color }}
                            />
                        ))}
                        </div>
                        <h3 className={`text-lg font-bold tracking-tight ${isSelected ? 'text-lemon-400' : 'text-white'}`}>
                            {style.title}
                        </h3>
                    </div>
                    
                    {isSelected && (
                        <div className="w-6 h-6 bg-lemon-400 rounded-full flex items-center justify-center text-black animate-in zoom-in duration-200 shadow-lg shadow-lemon-400/50">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-4 min-h-[3em] font-medium opacity-90 flex-grow relative z-10">
                {style.desc}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-2 relative z-10">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 flex items-center gap-1">
                        Fun Factor 
                        <span className={`ml-1 px-1.5 py-0.5 rounded text-black font-bold ${style.funFactor > 7 ? 'bg-lemon-400' : 'bg-gray-200'}`}>
                            {style.funFactor}
                        </span>
                    </span>

                    {/* Hover Action Text */}
                    <div className={`text-xs font-bold transition-all duration-300 
                        ${isSelected ? 'text-lemon-400 opacity-100' : 'text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}
                    `}>
                        {isSelected ? 'Selected' : 'Click to Apply →'}
                    </div>
                </div>

                {/* Subtle background gradient for creative categories */}
                {(style.category.includes('Creative') || style.category.includes('Pop') || style.category.includes('Cyber')) && (
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-white/10 transition-all"></div>
                )}
            </button>
            );
        })}
        </div>
    </div>
  );
};

export default StyleGrid;