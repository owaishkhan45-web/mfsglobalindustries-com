// src/components/MagneticButton.tsx
import React, { useRef, useState, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
}

export const MagneticButton = ({ 
  children, className = '', onClick, href, strength = 0.25 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
    setPosition({ x: 0, y: 0 });
  };

  const style = { transform: \	ranslate(\px, \px)\ };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, display: 'inline-block' }}
      className={\tn-premium \\}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={href} onClick={(e) => { e.preventDefault(); if(onClick) onClick(); }}>{content}</a>;
  }
  return content;
};