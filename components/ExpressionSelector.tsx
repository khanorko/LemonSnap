import React from 'react';
import { EXPRESSION_PRESETS } from '../constants';
import { ExpressionOption } from '../types';

interface Props {
  selectedExpression: ExpressionOption;
  onSelect: (expression: ExpressionOption) => void;
}

const ExpressionSelector: React.FC<Props> = ({ selectedExpression, onSelect }) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-dark-800 p-1.5 rounded-lg">
          <svg className="w-5 h-5 text-lemon-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg text-white leading-none">Facial Expression</h3>
          <p className="text-xs text-gray-400 mt-0.5">Choose the mood and expression for your portrait</p>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
        {EXPRESSION_PRESETS.map((preset) => {
          const isSelected = selectedExpression === preset.id;
          
          return (
            <button
              key={preset.id}
              onClick={() => onSelect(preset.id)}
              className={`
                relative flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 border flex-shrink-0 min-w-[100px]
                ${isSelected 
                  ? 'bg-gradient-to-br from-lemon-900/40 to-dark-800 border-lemon-400/50 text-white shadow-[0_4px_20px_-5px_rgba(250,204,21,0.3)] scale-105' 
                  : 'bg-dark-800/40 border-dark-700 text-gray-400 hover:bg-dark-700 hover:text-gray-200 hover:border-gray-500'
                }
              `}
            >
              <span className={`text-3xl filter transition-all ${isSelected ? 'grayscale-0 scale-110' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                {preset.icon}
              </span>
              <span className={`font-bold text-xs whitespace-nowrap ${isSelected ? 'text-lemon-400' : 'text-gray-400'}`}>
                {preset.label}
              </span>
              
              {/* Active Indicator */}
              {isSelected && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-lemon-400 rounded-t-full shadow-[0_-2px_8px_rgba(250,204,21,0.6)]"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ExpressionSelector;

