'use client';

import React, { useState, useEffect } from "react";
import { FadeUp } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ProjectSlider from '@/components/ProjectSlider';
import CertificateModal, { type CertificateData } from '@/components/CertificateModal';
import { competencies, thesisProject } from '@/data/projects';
import { CompetencyItem } from '@/types';

const isDataScienceOrVisionProject = (project: CompetencyItem) =>
  project.category === "data-science" ||
  project.category === "computer-vision" ||
  /deep learning|lstm|informer|prediction|python|data scientist|llm|nlp|computer vision|yolo|collision/i.test(
    `${project.title} ${project.description}`
  );

export default function ProjectSection() {
  const [activeCertificate, setActiveCertificate] = useState<CertificateData | null>(null);
  const [isMounted, setIsMounted] = useState(false);

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
              <div className="w-[400px]">
                <ProjectCard
                  comp={thesisProject}
                  index={0}
                  containImage={true}
                  onOpenCertificate={handleOpenCertificate}
                />
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
