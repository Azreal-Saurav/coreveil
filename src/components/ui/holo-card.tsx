"use client";

import React, { useRef, FC, ReactNode, MouseEvent } from 'react';

interface HolographicCardProps {
  children: ReactNode;
  width?: string;
  height?: string;
  glowColor?: string;
  holoColor1?: string;
  holoColor2?: string;
}

const HolographicCard: FC<HolographicCardProps> = ({
  children,
  width = '300px',
  height = '300px',
  glowColor = 'rgba(255, 120, 0, 0.3)',
  holoColor1 = 'rgba(255, 165, 0, 0.2)',
  holoColor2 = 'rgba(255, 69, 0, 0.1)'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--x', `50%`);
    card.style.setProperty('--y', `50%`);
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div
      className="holographic-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--card-width': width,
        '--card-height': '100%',
        '--color-glow': glowColor,
        '--color-holo-1': holoColor1,
        '--color-holo-2': holoColor2
      } as React.CSSProperties}
    >
      <div className="holo-content">
        {children}
      </div>
      <div className="holo-glow" />
    </div>
  );
};

export default HolographicCard;
