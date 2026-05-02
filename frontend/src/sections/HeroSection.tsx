'use client';

import TypedText from '@/components/TypedText';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container-max section-padding relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up [animation-delay:100ms] bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 bg-clip-text text-transparent">
          <TypedText
            strings={[
              "Hi, I'm Lutfiandra Pohan",
            ]}
          />
        </h1>

        {/* Subheadline */}
        <p className="section-subtitle mx-auto mb-10 animate-slide-up [animation-delay:200ms]">
          Fullstack Developer & Data Scientist Enthusiast.
        </p>

        {/* CTAs */}
        <div className="flex flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:300ms]">
          <a
            href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/40 hover:text-brand-400 transition-all duration-300 text-xl shadow-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Lutfiandraa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/40 hover:text-brand-400 transition-all duration-300 text-xl shadow-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 hover:from-slate-200 hover:via-white hover:to-slate-300 text-slate-900 font-semibold text-sm transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg border border-white/20"
          >
            <FaDownload className="text-slate-900" />
            Resume
          </a>
        </div>

      </div>
    </section>
  );
}
