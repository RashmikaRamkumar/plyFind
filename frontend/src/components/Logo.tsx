
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`font-semibold ${sizeClasses[size]} text-blue-600 flex items-center`}>
      <span className="text-blue-800">Glasswood</span>
      <div className="ml-1 h-2 w-2 rounded-full bg-blue-400"></div>
    </div>
  );
};

export default Logo;
