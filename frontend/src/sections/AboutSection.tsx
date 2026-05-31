'use client';

import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs,
} from 'react-icons/si';

import { motion } from 'framer-motion';
import { FadeUp, FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ParallaxSection } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';

import { SkillItem } from '@/types';

type Tab = 'lang' | 'tools';



const I = (src: string, alt: string) => (
  <img src={src} alt={alt} className="w-8 h-8 object-contain" loading="lazy" decoding="async" />
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
  { name: 'Docker', icon: I('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'Docker'), color: '#2496ED' },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>('lang');
  const items = activeTab === 'lang' ? langAndFramework : toolsList;

  return (
    <section id="about" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <SlideInLeft>
            <div className="space-y-6">
              <SectionHeader>
                  Passionate about building{' '}
                  <span className="text-gradient">great things</span>
              </SectionHeader>
              <FadeUp delay={0.15}>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  I&apos;m a Fullstack Developer and Data Enthusiast
                  focused on building scalable, high-performance systems.
                  I integrate data into applications to deliver more intelligent and efficient solutions.
                  I continuously expand my knowledge in Artificial Intelligence and data.
                </p>
              </FadeUp>
            </div>
          </SlideInLeft>

          <div className="space-y-6">
            <FadeUp delay={0.15}>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
                Capability
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative flex sm:inline-flex rounded-full p-1.5 gap-1 bg-white/5 border border-white/10 w-full sm:w-auto overflow-hidden">
              <TabButton tab="lang" label="Language & Framework" activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabButton tab="tools" label="Tools" activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            </FadeUp>

            <StaggerContainer>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {items.map((item) => (
                  <StaggerItem key={`${activeTab}-${item.name}`}>
                    <div className="card p-4 flex flex-col items-center gap-2 hover:border-brand-500/50 transition-all duration-300 animate-card-in transform">
                      <div
                        style={{ color: item.color }}
                        className="w-8 h-8 flex items-center justify-center text-3xl [&>img]:w-8 [&>img]:h-8"
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-center">{item.name}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

function TabButton({ tab, label, activeTab, setActiveTab }: { tab: Tab, label: string, activeTab: Tab, setActiveTab: (t: Tab) => void }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`relative flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 z-10 ${activeTab === tab
        ? 'text-white'
        : 'text-slate-400 hover:text-slate-200'
        }`}
    >
      {activeTab === tab && (
        <motion.div
          layoutId="active-tab-glow"
          className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-20">{label}</span>
    </button>
  );
}
