import type { Metadata } from 'next';
import AboutSection from '@/sections/AboutSection';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About — Lutfi Portfolio',
  description: 'Learn more about Lutfi — skills, background, and philosophy.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>
    </div>
  );
}
