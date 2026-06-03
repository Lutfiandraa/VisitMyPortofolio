'use client';

import HeroSection from '@/sections/HeroSection';
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('@/sections/AboutSection'), { ssr: false });
const ProjectSection = dynamic(() => import('@/sections/ProjectSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/sections/ContactSection'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
