import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ProjectSection from '@/sections/ProjectSection';
import ContactSection from '@/sections/ContactSection';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HomePage() {
  return (
    <>
      <ScrollAnimation><HeroSection /></ScrollAnimation>
      <ScrollAnimation><AboutSection /></ScrollAnimation>
      <ScrollAnimation><ProjectSection /></ScrollAnimation>
      <ScrollAnimation><ContactSection /></ScrollAnimation>
    </>
  );
}
