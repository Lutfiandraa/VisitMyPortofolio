import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Portfolio Website',
    description:
      'A performant personal portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode, smooth animations, and a modular architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Dashboard',
    description:
      'A real-time admin dashboard for an e-commerce platform with product management, order tracking, and analytics charts.',
    tags: ['React', 'Node.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-3',
    title: 'AI Chat Interface',
    description:
      'A sleek chat interface powered by a language model API with streaming responses, conversation history, and a glassmorphism design.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="section-padding bg-[var(--color-surface)]">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-3">Portfolio</p>
          <h2 className="section-title mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A curated selection of projects — each one solving a real problem with thoughtful engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} className="card p-6 group flex flex-col gap-4">
              {project.featured && (
                <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-600/20 text-brand-400">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-lg font-bold group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-border)] text-[var(--color-text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2 border-t border-[var(--color-border)]">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-brand-400 hover:underline">
                    Live Demo ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[var(--color-text-muted)] hover:text-brand-400 transition-colors">
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
            See All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
