'use client';

import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoPaperPlaneOutline, IoPersonCircle, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeUp, FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ParallaxSection } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';
import SocialLink from '@/components/SocialLink';
import { useChatbot } from "@/lib/useChatbot";

import { deobfuscateString } from "@/lib/security";

const EMAIL = typeof window !== "undefined" ? deobfuscateString("bHV0ZmlhbmRyYXBvaGFubkBnbWFpbC5jb20=") : "lutfiandrapohann@gmail.com";

function renderBotMessage(text: string) {
  if (!text.includes(EMAIL)) {
    return <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{text}</p>;
  }
  const [before, after] = text.split(EMAIL);
  return (
    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
      {before}
      <span className="inline-flex max-w-full flex-wrap items-center gap-1 align-middle">
        <span className="break-all">{EMAIL}</span>
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Open Gmail to send email"
        >
          <IoArrowForward className="w-4 h-4" />
        </a>
      </span>
      {after}
    </p>
  );
}

export default function ContactSection() {
  const { messages, inputValue, setInputValue, chatEndRef, sendMessage, clearMessages } = useChatbot();

  return (
    <section id="contact" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeader className="mb-4">
              Get in <span className="text-gradient">Touch</span>
          </SectionHeader>
          <FadeUp delay={0.15}>
            <p className="section-subtitle mx-auto">
              Any Business? or Project Colaboration? you can direct to my LinkedIn or Instagram profile's!
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end max-w-5xl mx-auto">
          <SlideInLeft className="md:col-span-7 relative z-10 flex flex-col gap-4 order-2 md:order-1">
            <FadeUp delay={0.2} className="text-left">
              <div className="bg-slate-300/10 backdrop-blur-md rounded-2xl border border-slate-400/30 overflow-hidden flex flex-col min-h-[420px] max-h-[500px] md:min-h-[460px] md:max-h-[540px]">
                <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-400/30 bg-slate-200/10">
                  <div className="flex items-center gap-3">
                    <IoPersonCircle className="w-10 h-10 text-slate-200 shrink-0" aria-hidden />
                    <div className="min-w-0">
                      <p className="font-semibold text-white truncate">F.R.I.D.A.Y</p>
                      <p className="text-xs text-slate-400 mt-0.5">Lutfiandra's Assistant</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={clearMessages}
                    className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer flex items-center justify-center rounded-lg hover:bg-slate-400/10"
                    title="Clear Chat"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto flex flex-col bg-slate-400/5">
                  {messages.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-[200px]">
                      <p className="text-slate-400 text-sm text-center">
                        Ask to Collaborate
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 space-y-3">
                      {messages.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.role === "bot"
                              ? "bg-zinc-900 text-slate-100 rounded-bl-md border border-white/10"
                              : "bg-zinc-800 text-white rounded-br-md"
                              }`}
                          >
                            {msg.role === "bot"
                              ? renderBotMessage(msg.text)
                              : (
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                  {msg.text}
                                </p>
                              )}
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>
                  )}
                </div>
                <div className="shrink-0 p-3 border-t border-slate-400/30 bg-slate-400/5">
                  <div className="flex gap-2 rounded-xl border border-slate-400/30 bg-slate-950/30 focus-within:border-slate-300/50 focus-within:ring-2 focus-within:ring-slate-300/20 transition-all">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && !e.shiftKey && sendMessage(inputValue)
                      }
                      placeholder="Enter your message"
                      className="flex-1 rounded-l-xl bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-400 focus:outline-none outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => sendMessage(inputValue)}
                      className="shrink-0 rounded-r-xl px-4 py-2 text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50"
                      aria-label="Kirim"
                    >
                      <IoPaperPlaneOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>

            <div className="absolute -bottom-16 left-0 right-0 flex justify-center md:justify-start gap-4">
              <SocialLink 
                href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/" 
                icon={<FaLinkedin className="text-[#0A66C2]" />} 
                label="LinkedIn" 
                variant="with-text" 
              />
              <SocialLink 
                href="https://www.instagram.com/lutfiandrra/" 
                icon={<FaInstagram className="text-[#E1306C]" />} 
                label="Instagram" 
                variant="with-text" 
              />
              </div>
          </SlideInLeft>

          <FadeUp delay={0.3} className="md:col-span-5 flex justify-center relative mb-0 order-1 md:order-2">
              <div className="relative group max-w-[280px] md:max-w-[340px] lg:max-w-[380px] mx-auto">
                <div className="absolute inset-[-40px] bg-gradient-to-r from-slate-400/35 via-slate-100/25 to-slate-500/35 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
                <img
                  loading="lazy" decoding="async"
                  src="/profileportormv.png"
                  alt="Profile"
                  className="w-full h-auto object-contain relative z-10 transform transition-all duration-500 group-hover:scale-[1.03]"
                />
              </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
