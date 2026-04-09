import React from 'react';

interface WaveSeparatorProps {
  className?: string;
}

export const WaveSeparator: React.FC<WaveSeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className="relative w-full h-20 md:h-28 lg:h-40"
        viewBox="0 0 1440 160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <style>
            {`
              @keyframes wave-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .wave-path-1 {
                animation: wave-scroll 20s linear infinite;
              }
              
              .wave-path-2 {
                animation: wave-scroll 25s linear infinite;
              }
              
              .wave-path-3 {
                animation: wave-scroll 30s linear infinite;
              }
            `}
          </style>
        </defs>
        
        {/* 第一层波浪 - 最明显 */}
        <g className="wave-path-1">
          <path
            d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 C1400,120 1600,40 1800,80 L1800,160 L0,160 Z"
            fill="rgba(255, 255, 255, 1)"
          />
        </g>
        
        {/* 第二层波浪 - 中等可见度 */}
        <g className="wave-path-2" style={{ opacity: 0.85 }}>
          <path
            d="M0,90 C200,130 400,50 600,90 C800,130 1000,50 1200,90 C1400,130 1600,50 1800,90 L1800,160 L0,160 Z"
            fill="rgba(255, 255, 255, 0.9)"
          />
        </g>
        
        {/* 第三层波浪 - 轻微可见 */}
        <g className="wave-path-3" style={{ opacity: 0.7 }}>
          <path
            d="M0,100 C200,140 400,60 600,100 C800,140 1000,60 1200,100 C1400,140 1600,60 1800,100 L1800,160 L0,160 Z"
            fill="rgba(255, 255, 255, 0.8)"
          />
        </g>
      </svg>
    </div>
  );
};
