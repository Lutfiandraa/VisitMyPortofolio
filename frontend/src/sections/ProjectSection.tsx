'use client';

import React, { useState, useEffect } from "react";
import { FadeUp } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ProjectSlider from '@/components/ProjectSlider';
import CertificateModal, { type CertificateData } from '@/components/CertificateModal';
import { competencies, thesisProject } from '@/data/projects';
import { CompetencyItem } from '@/types';
import { ZoomIn, ZoomOut, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const isDataScienceOrVisionProject = (project: CompetencyItem) =>
  project.category === "data-science" ||
  project.category === "computer-vision" ||
  /deep learning|lstm|informer|prediction|python|data scientist|llm|nlp|computer vision|yolo|collision/i.test(
    `${project.title} ${project.description}`
  );

export default function ProjectSection() {
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [posterZoom, setPosterZoom] = useState(1);
  const [posterPan, setPosterPan] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const webProjects = competencies.filter((p) => !isDataScienceOrVisionProject(p));
  const dataScienceProjects = competencies.filter((p) => isDataScienceOrVisionProject(p));

  const handleOpenCertificate = (image: string, description: string, title?: string) => {
    setActiveCertificate({ image, description, title });
  };

  return (
    <section id="projects" className="section-padding animate-section-in bg-transparent">
      <div className="container-max">

        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeader className="mb-4">
            <span className="text-gradient">Project</span>
          </SectionHeader>
        </div>

        {/* Web Development slider */}
        <ProjectSlider
          label="Web Development"
          dotClass="bg-yellow-300 animate-pulse-yellow"
          projects={webProjects}
          onOpenCertificate={handleOpenCertificate}
          wrapperClassName="mb-16"
        />

        {/* Data Transformation slider */}
        <ProjectSlider
          label="Data Transformation"
          dotClass="bg-green-400 animate-pulse-green"
          projects={dataScienceProjects}
          onOpenCertificate={handleOpenCertificate}
        />

        {/* Final-Year Thesis */}
        <div className="mt-16">
          <FadeUp delay={0.1}>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm md:text-base bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse-red" />
                Final-Year Project (Bachelor Thesis)
              </span>
            </div>
          </FadeUp>

          <div className="relative">
            <FadeUp delay={0.2}>
              <div className="w-full max-w-[500px] rounded-2xl border border-white/10 bg-white/5 p-2 md:p-4 shadow-xl backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 relative">
                <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-2">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { setPosterZoom(1); setPosterPan({ x: 0, y: 0 }); }}
                      className="p-1.5 bg-black/60 text-white rounded-md hover:bg-black/80 backdrop-blur-sm shadow-md text-xs font-semibold px-2 flex items-center h-[30px]"
                    >
                      Reset
                    </button>
                    <button 
                      onClick={() => setPosterZoom(prev => Math.max(1, prev - 0.25))}
                      className="p-1.5 bg-black/60 text-white rounded-md hover:bg-black/80 backdrop-blur-sm shadow-md h-[30px] w-[30px] flex items-center justify-center"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <button 
                      onClick={() => setPosterZoom(prev => Math.min(4, prev + 0.25))}
                      className="p-1.5 bg-black/60 text-white rounded-md hover:bg-black/80 backdrop-blur-sm shadow-md h-[30px] w-[30px] flex items-center justify-center"
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>
                  
                  {posterZoom > 1 && (
                    <div className="flex flex-col items-center gap-1 bg-black/60 p-2 rounded-md backdrop-blur-sm shadow-md">
                      <button 
                        onClick={() => setPosterPan(prev => ({ ...prev, y: prev.y + 30 }))}
                        className="p-1 hover:bg-white/20 rounded-md text-white"
                      >
                        <ArrowUp size={16} />
                      </button>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setPosterPan(prev => ({ ...prev, x: prev.x + 30 }))}
                          className="p-1 hover:bg-white/20 rounded-md text-white"
                        >
                          <ArrowLeft size={16} />
                        </button>
                        <button 
                          onClick={() => setPosterPan(prev => ({ ...prev, x: prev.x - 30 }))}
                          className="p-1 hover:bg-white/20 rounded-md text-white"
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => setPosterPan(prev => ({ ...prev, y: prev.y - 30 }))}
                        className="p-1 hover:bg-white/20 rounded-md text-white"
                      >
                        <ArrowDown size={16} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full h-auto overflow-hidden rounded-xl">
                  <img
                    src="/PosterTALutfiandra.png"
                    alt="Poster Tugas Akhir Lutfiandra"
                    className="w-full h-auto object-contain transition-transform duration-300"
                    style={{ 
                      transform: `translate(${posterPan.x}px, ${posterPan.y}px) scale(${posterZoom})`, 
                      transformOrigin: 'center center' 
                    }}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

      </div>

      {/* Certificate / Poster modal */}
      <CertificateModal
        activeCertificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
        isMounted={isMounted}
      />
    </section>
  );
}
