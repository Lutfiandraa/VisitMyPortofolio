'use client';

import TypedText from '@/components/TypedText';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium mb-8" style={{ color: '#f5f5f0', textShadow: '0 0 7px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse-green" />
              Available for any opportunities
            </div>
          </FadeIn>

          <h1 className="font-cousine text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 bg-clip-text text-transparent min-h-[80px] sm:min-h-0">
            <TypedText strings={["Hi, I'am Lutfiandra Pohan"]} />
          </h1>

          <FadeUp delay={0}>
            <p className="section-subtitle mx-auto mb-10" style={{ color: '#f5f5f0', textShadow: '0 0 7px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)' }}>
              Fullstack Developer & AI Engineer Enthusiast.
            </p>
          </FadeUp>



        </div>
      </ParallaxSection>
    </section>
  );
}
