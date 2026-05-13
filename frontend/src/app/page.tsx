import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import WorkExperience from '@/sections/WorkExperience';
import ProjectSection from '@/sections/ProjectSection';
import ContactSection from '@/sections/ContactSection';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function HomePage() {
  return (
    <>
      <ScrollAnimation><HeroSection /></ScrollAnimation>
      <ScrollAnimation><AboutSection /></ScrollAnimation>
      <ScrollAnimation><WorkExperience /></ScrollAnimation>
      <ScrollAnimation><ProjectSection /></ScrollAnimation>
      <ScrollAnimation><ContactSection /></ScrollAnimation>
    </>
  );
}
