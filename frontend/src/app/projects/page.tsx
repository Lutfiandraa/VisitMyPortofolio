import type { Metadata } from 'next';
import ProjectSection from '@/sections/ProjectSection';

export const metadata: Metadata = {
  title: 'Projects — Lutfi Portfolio',
  description: 'Explore the projects built by Lutfi using modern web technologies.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectSection />
    </div>
  );
}
