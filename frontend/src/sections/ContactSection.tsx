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
            <p className="section-subtitle mx-auto">
              Any Business? or Project Colaboration? you can direct to my LinkedIn or Instagram profile&apos;s!
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end max-w-5xl mx-auto">

          {/* Chatbot widget */}
          <SlideInLeft className="md:col-span-7 relative z-10 flex flex-col gap-4 order-2 md:order-1">
            <FadeUp delay={0.2} className="text-left">
              <ChatbotWidget />
            </FadeUp>
          </SlideInLeft>

          {/* Profile image */}
          <FadeUp
            delay={0.3}
            className="md:col-span-5 flex justify-center items-center relative mb-0 order-1 md:order-2"
          >
            <div className="relative group w-full mx-auto">
              <div className="absolute inset-[-40px] bg-gradient-to-r from-slate-400/35 via-slate-100/25 to-slate-500/35 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
              <Image
                src="/profileportormv.png"
                alt="Profile"
                width={800}
                height={1000}
                className="w-full h-auto max-h-[300px] md:max-h-[380px] object-contain object-bottom relative z-10 transform transition-all duration-500 group-hover:scale-[1.03]"
                priority={false}
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
