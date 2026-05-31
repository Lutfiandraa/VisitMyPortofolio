import HeroSection from '@/sections/HeroSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('@/sections/AboutSection'));
const ProjectSection = dynamic(() => import('@/sections/ProjectSection'));
const ContactSection = dynamic(() => import('@/sections/ContactSection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimation><AboutSection /></ScrollAnimation>
      <ScrollAnimation><ProjectSection /></ScrollAnimation>
      <ScrollAnimation><ContactSection /></ScrollAnimation>
    </>
  );
}
