'use client';

import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('@/sections/AboutSection'), { ssr: false });

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
