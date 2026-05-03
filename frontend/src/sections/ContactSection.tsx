'use client';

import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoPaperPlaneOutline, IoPersonCircle, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

const BOT_REPLIES: Record<string, string> = {
  rental:
    "Terima kasih atas minat Anda! Untuk rental equipment (articulated dump truck, loader, excavator, dll.) silakan kunjungi halaman Rent atau hubungi kami untuk penawaran khusus.",
  spare:
    "Untuk spare part dan layanan perawatan alat berat, Anda dapat mengunjungi halaman Service atau menghubungi tim kami. Kami siap membantu kebutuhan parts dan maintenance Anda.",
  contact:
    "Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!",
  hubungi:
    "Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!",
  woy:
    "Yes? What can i help u today maam//sir",
  anjing:
    "Well, you’re kinda rude and have no manners.",
  collaborate:
    "Sure! here's my personal email lutfiandrapohann@gmail.com",
  business:
    "Sure! here's my personal email lutfiandrapohann@gmail.com",
  default:
    "Thank you for reaching out to Lutfiandra Pohan. I am F.R.I.D.A.Y, Lutfiandra's assistant. If you do not receive a response within the expected time, please contact Lutfiandra directly at\nlutfiandrapohann@gmail.com",
};

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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInputValue("");
    const key = trimmed.toLowerCase().replace(/\s+/g, " ");
    const replyKey =
      Object.keys(BOT_REPLIES).find((k) => key.includes(k)) || "default";
    const botText = BOT_REPLIES[replyKey] || BOT_REPLIES.default;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    }, 600);
  };

  return (
    <section id="contact" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          <motion.div
            className="md:col-span-7 relative z-10 card p-6 md:p-8 backdrop-blur-lg flex flex-col gap-6 order-2 md:order-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-slate-300 via-white to-slate-400 bg-clip-text text-transparent mb-2">Let's Collaborate!</h2>
              <p className="text-slate-400 text-sm mb-6">
                Get in touch via chatbot or social media below. Let's have a conversation!
              </p>
            </div>

            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-slate-300/10 backdrop-blur-md rounded-2xl border border-slate-400/30 overflow-hidden flex flex-col min-h-[360px] max-h-[460px]">
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
                    onClick={() => setMessages([])}
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
                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                              msg.role === "bot"
                                ? "bg-slate-200/10 text-slate-100 rounded-bl-md border border-slate-400/20"
                                : "bg-slate-500/80 text-white rounded-br-md border border-slate-400/30"
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
                      className="flex-1 rounded-l-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none outline-none"
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
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start gap-4 mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a
                href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-700/80 text-lg transition-all flex items-center gap-2 border border-slate-700/30 hover:border-slate-600/50"
              >
                <FaLinkedin /> <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/lutfiandrra/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-700/80 text-lg transition-all flex items-center gap-2 border border-slate-700/30 hover:border-slate-600/50"
              >
                <FaInstagram /> <span className="text-xs font-medium">Instagram</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end relative mb-0 md:pl-10 md:translate-x-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative group max-w-[320px] md:max-w-full">
              <div className="absolute inset-[-40px] bg-gradient-to-r from-slate-400/35 via-slate-100/25 to-slate-500/35 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
              <img 
                src="/profileportormv.png" 
                alt="Profile" 
                className="w-full h-auto object-contain relative z-10 transform transition-all duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
