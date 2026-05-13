'use client';

import React, { useState } from 'react';

export default function WorkExperience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience" className="section-padding animate-section-in bg-transparent">
      <div className="container-max">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Title */}
          <div className="md:w-1/3 flex flex-col items-start">
            <h2 className="section-title sticky top-24">
              <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Right Column - Content Box */}
          <div className="md:w-2/3">
            <div className="card p-5 md:p-6 hover:border-brand-500/50 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center">
                  <img 
                    src="/Winnicode.png" 
                    alt="PT Winnicode Garuda Indonesia" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent mb-1">
                    Fullstack Developer
                  </h3>
                  <div className="text-xs md:text-sm text-slate-300 mb-1 font-medium">
                    PT. Winnicode Garuda Indonesia · Internship
                  </div>
                  <div className="text-[11px] md:text-xs text-[var(--color-text-muted)] mb-1">
                    Apr 2025 - Jul 2025 · 4 mos
                  </div>
                  <div className="text-[11px] md:text-xs text-[var(--color-text-muted)] mb-4 pb-4 border-b border-white/10">
                    Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40261 · Remote
                  </div>

                  <div 
                    className={`text-xs md:text-sm text-slate-300 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-24 opacity-80'
                    }`}
                  >
                    <ul className="list-disc pl-4 space-y-2 marker:text-slate-500">
                      <li>Architected and developed a News Portal Information System utilizing the Node.js framework.</li>
                      <li>Implemented React.js for the frontend, optimizing responsiveness across multiple devices.</li>
                      <li>Designed and integrated RESTful APIs to ensure seamless client-server communication, utilizing Express.js for the backend.</li>
                      <li>Maximized the use of Tailwind CSS to construct a modern and intuitive user interface (UI).</li>
                      <li>Integrated NewsAPI as the primary source for real-time news content, enabling automated news updates.</li>
                      <li>Utilized PostgreSQL for efficient and secure user data management.</li>
                      <li>Implemented robust security measures, including Cross-Site Scripting (XSS) protection.</li>
                      <li>Developed a comprehensive statistical dashboard for administrative monitoring and analytics.</li>
                    </ul>
                  </div>

                  {/* Fade out effect when collapsed */}
                  {!isExpanded && (
                    <div className="h-12 -mt-12 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent relative z-10 w-full pointer-events-none" />
                  )}

                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors inline-flex items-center gap-1 focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'See more'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
