'use client';

import Image from 'next/image';
import { FadeUp, SlideInLeft } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeader className="mb-4">
            Get in <span className="text-gradient">Touch</span>
          </SectionHeader>
          <FadeUp delay={0.15}>
            <p className="section-subtitle mx-auto" style={{ color: '#f5f5f0', textShadow: '0 0 7px rgba(255,255,255,0.7), 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)' }}>
              Any Business? or Project Colaboration? you can direct to my LinkedIn or Instagram profile&apos;s!
            </p>
          </FadeUp>
        </div>

        <div className="max-w-5xl mx-auto">

          {/* Chatbot widget */}
          <SlideInLeft className="relative z-10 flex flex-col gap-4">
            <FadeUp delay={0.2} className="text-left">
              <ChatbotWidget />
            </FadeUp>
          </SlideInLeft>

        </div>
      </div>
    </section>
  );
}
