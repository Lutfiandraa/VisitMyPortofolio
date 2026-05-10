'use client';

import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs,
} from 'react-icons/si';

type Tab = 'lang' | 'tools';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const I = (src: string, alt: string) => (
  <img src={src} alt={alt} className="w-8 h-8 object-contain" />
);

const langAndFramework: SkillItem[] = [
  { name: 'Hypertext Markup Language', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'Cascading Style Sheet', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'Java Script', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'React Js', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Type Script', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Vue Js', icon: I('https://cdn.simpleicons.org/vuedotjs/4FC08D', 'Vue Js'), color: '#4FC08D' },
  { name: 'Node Js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express Js', icon: I('https://cdn.simpleicons.org/express/FFFFFF', 'Express Js'), color: '#FFFFFF' },
  { name: 'Next Js', icon: <SiNextdotjs />, color: '#FFFFFF' },
  { name: 'Astro Js', icon: I('https://cdn.simpleicons.org/astro/FF5D01', 'Astro Js'), color: '#FF5D01' },
  { name: 'Angular Js', icon: I('https://cdn.simpleicons.org/angular/DD0031', 'Angular Js'), color: '#DD0031' },
  { name: 'Flutter', icon: I('https://cdn.simpleicons.org/flutter/02569B', 'Flutter'), color: '#02569B' },
  { name: 'Dart', icon: I('https://cdn.simpleicons.org/dart/0175C2', 'Dart'), color: '#0175C2' },
  { name: 'Python', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'Python'), color: '#3776AB' },
  { name: 'Tensorflow', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 'Tensorflow'), color: '#FF6F00' },
  { name: 'Keras', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', 'Keras'), color: '#D00000' },
  { name: 'Scikit-learn', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', 'Scikit-learn'), color: '#F7931E' },
  { name: 'FastAPI', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', 'FastAPI'), color: '#009688' },
];

const toolsList: SkillItem[] = [
  { name: 'Visual Studio Code', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 'VS Code'), color: '#007ACC' },
  { name: 'Langflow', icon: I('https://cdn.simpleicons.org/langflow/FFFFFF', 'Langflow'), color: '#FFFFFF' },
  { name: 'PostgreSQL', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 'PostgreSQL'), color: '#336791' },
  { name: 'Supabase', icon: I('https://cdn.simpleicons.org/supabase/3ECF8E', 'Supabase'), color: '#3ECF8E' },
  { name: 'Google Colaboratory', icon: I('https://cdn.simpleicons.org/googlecolab/F9AB00', 'Google Colab'), color: '#F9AB00' },
  { name: 'Postman', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', 'Postman'), color: '#FF6C37' },
  { name: 'Unit Testing Jest', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', 'Jest'), color: '#C21325' },
  { name: 'Git', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 'Git'), color: '#F05032' },
  { name: 'GitHub', icon: I('https://cdn.simpleicons.org/github/FFFFFF', 'GitHub'), color: '#FFFFFF' },
  { name: 'GitLab', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', 'GitLab'), color: '#FC6D26' },
  { name: 'Swagger UI', icon: I('https://cdn.simpleicons.org/swagger/85EA2D', 'Swagger UI'), color: '#85EA2D' },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>('lang');
  const items = activeTab === 'lang' ? langAndFramework : toolsList;

  return (
    <section id="about" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-6">
            <h2 className="section-title">
              Passionate about building{' '}
              <span className="text-gradient">great things</span>
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              I&apos;m a Fullstack Developer and Data Enthusiast
              focused on building scalable, high-performance systems.
              I integrate data into applications to deliver more intelligent and efficient solutions.
              I continuously expand my knowledge in Artificial Intelligence and data.
            </p>

          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Capability
            </p>

            <div className="flex sm:inline-flex rounded-full p-1 gap-1 bg-[var(--color-border)] w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('lang')}
                className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === 'lang'
                  ? 'bg-[var(--color-surface)] text-[var(--color-text)] shadow'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
              >
                Language &amp; Framework
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === 'tools'
                  ? 'bg-[var(--color-surface)] text-[var(--color-text)] shadow'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
              >
                Tools
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((item) => (
                <div
                  key={`${activeTab}-${item.name}`}
                  className="card p-4 flex flex-col items-center gap-2 hover:border-brand-500/50 transition-all duration-300 animate-card-in transform"
                >
                  <div
                    style={{ color: item.color }}
                    className="w-8 h-8 flex items-center justify-center text-3xl [&>img]:w-8 [&>img]:h-8"
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
