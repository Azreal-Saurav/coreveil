
"use client";

import { motion, useSpring } from "framer-motion";
import React, { useRef } from "react";

export default function MagnifyOnHover({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const scale = useSpring(1, {
    stiffness: 150,
    damping: 20,
    mass: 0.1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const distance = Math.abs(e.clientX - (rect.left + rect.width / 2));
    
    // Magnify when close to the center
    const newScale = distance < rect.width ? 1.15 : 1;
    scale.set(newScale);
  };

  const handleMouseLeave = () => {
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200"
    >
      {children}
    </motion.div>
  );
}
