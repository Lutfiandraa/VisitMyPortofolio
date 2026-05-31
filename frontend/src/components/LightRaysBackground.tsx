'use client';

import LightRays from './LightRays';

export default function LightRaysBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10" style={{ backgroundColor: '#000000' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#C0C0C0"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        pulsating={false}
        fadeDistance={1}
        saturation={0.1}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
      />
    </div>
  );
}
