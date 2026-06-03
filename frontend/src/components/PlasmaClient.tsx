'use client';

import dynamic from 'next/dynamic';

const Plasma = dynamic(() => import('./Plasma'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-black" />,
});

export default function PlasmaClient() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
      }}
    >
      <Plasma
        color="#B497CF"
        speed={0.6}
        direction="forward"
        scale={1.2}
        opacity={0.85}
        mouseInteractive={false}
      />
    </div>
  );
}
