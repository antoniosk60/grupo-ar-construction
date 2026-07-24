import React, { useState } from 'react';
import { getImageUrl } from '../types';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true,
  textColor
}) => {
  const [imgSrc, setImgSrc] = useState('/src/assets/images/grupo_ar_official_logo_1784894081808.jpg');

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-24 h-24 sm:w-28 sm:h-28 rounded-3xl'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const handleImageError = () => {
    // Fallback to original uploaded asset URL if local public asset fails
    setImgSrc(getImageUrl('input_file_0.png'));
  };

  return (
    <div className={`inline-flex items-center gap-3 font-black font-display tracking-tight group cursor-pointer ${className}`}>
      {/* Emblem Badge Container */}
      <div className={`${sizeClasses[size]} overflow-hidden border border-amber-500/40 bg-amber-500/10 shadow-lg shadow-amber-500/10 shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400 p-0.5`}>
        <img 
          src={imgSrc} 
          alt="GRUPO-AR Logo Oficial" 
          onError={handleImageError}
          className="w-full h-full object-cover rounded-[inherit]"
        />
      </div>

      {showText && (
        <span className={`${textSizes[size]} ${textColor || ''}`}>
          GRUPO<span className="text-amber-500">-AR</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
