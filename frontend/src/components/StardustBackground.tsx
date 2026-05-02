'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function StardustBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars on mount to avoid server-side/client-side mismatch
    const generatedStars: Star[] = Array.from({ length: 120 }).map((_, i) => {
      const top = Math.floor(Math.random() * 100) + '%';
      const left = Math.floor(Math.random() * 100) + '%';
      // Pick sizes: mostly small, some medium, some slightly larger
      const sizeRandom = Math.random();
      let size = '1px';
      if (sizeRandom > 0.85) size = '3px';
      else if (sizeRandom > 0.5) size = '2px';

      const delay = (Math.random() * 4).toFixed(2) + 's';
      const duration = (2 + Math.random() * 4).toFixed(2) + 's';

      return { id: i, top, left, size, delay, duration };
    });

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-0 animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: star.size === '3px' ? '0 0 6px 1px rgba(255, 255, 255, 0.4)' : 'none',
          }}
        />
      ))}
    </div>
  );
}
