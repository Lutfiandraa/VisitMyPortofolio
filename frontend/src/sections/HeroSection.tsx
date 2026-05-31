'use client';

import TypedText from '@/components/TypedText';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FadeUp, FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ParallaxSection } from '@/components/animations/MotionWrapper';
import SocialLink from '@/components/SocialLink';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <ParallaxSection speed={0.25} className="w-full">
        <div className="container-max section-padding relative z-10 text-center">

          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse-green" />
              Available for any opportunities
            </div>
          </FadeIn>

          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 bg-clip-text text-transparent min-h-[80px] sm:min-h-0">
              <TypedText strings={["Hi, I'am Lutfiandra Pohan"]} />
            </h1>
          </FadeUp>

          <FadeUp delay={0}>
            <p className="section-subtitle mx-auto mb-10">
              Fullstack Developer & Data Scientist Enthusiast.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="flex flex-row gap-4 justify-center items-center">
              
              <SocialLink 
                href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/" 
                icon={<FaLinkedin className="text-[#0A66C2]" />} 
                label="LinkedIn" 
                hoverColorClass="hover:text-[#0A66C2]" 
              />
              <SocialLink 
                href="https://github.com/Lutfiandraa" 
                icon={<FaGithub />} 
                label="GitHub" 
                hoverColorClass="hover:text-brand-400" 
              />
            </div>
          </FadeUp>

        </div>
      </ParallaxSection>
    </section>
  );
}
