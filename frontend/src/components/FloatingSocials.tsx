'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-24 right-4 z-[90] flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <a
              href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:text-[#0A66C2] hover:bg-black/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} className="text-[#0A66C2]" />
            </a>
            <a
              href="https://github.com/Lutfiandraa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.instagram.com/lutfiandrra/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:text-[#E1306C] hover:bg-black/80 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram size={18} className="text-[#E1306C]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-white/80 hover:text-white hover:scale-125 transition-all duration-300 z-10 p-2 drop-shadow-md"
        aria-label="Toggle Socials"
      >
        {isOpen ? <FaChevronDown size={24} /> : <FaChevronUp size={24} />}
      </button>
    </div>
  );
}
