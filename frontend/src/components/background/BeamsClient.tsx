"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load BeamsTheme dengan SSR disabled
const BeamsTheme = dynamic(() => import('./BeamsTheme'), {
  ssr: false,
  loading: () => <div className="beams-fallback" />
});

// Check apakah browser support WebGL
function hasWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!context) return false;
    
    // Test apakah context berfungsi
    if (context instanceof WebGLRenderingContext || context instanceof WebGL2RenderingContext) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

interface BeamsClientProps {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

export default function BeamsClient(props: BeamsClientProps) {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL support setelah mount
    setWebGLSupported(hasWebGL());
  }, []);

  // Loading state
  if (webGLSupported === null) {
    return <div className="beams-fallback" />;
  }

  // Fallback jika WebGL tidak support
  if (!webGLSupported) {
    return (
      <div 
        className="beams-fallback"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(30, 30, 50, 0.8) 0%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none'
        }}
      />
    );
  }

  // Render BeamsTheme jika WebGL support
  return <BeamsTheme {...props} />;
}
