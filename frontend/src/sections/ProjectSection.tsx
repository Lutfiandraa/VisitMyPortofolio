'use client';

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from 'next/image';
import {
  SiDart, SiFlutter, SiJavascript, SiReact, SiVuedotjs,
  SiAngular, SiTypescript, SiNextdotjs, SiGatsby, SiAstro, SiFastapi, SiSupabase
} from "react-icons/si";
import {
  FaPaperPlane, FaInstagram, FaLinkedin, FaCertificate,
  FaChevronLeft, FaChevronRight, FaTimes, FaGithub
} from "react-icons/fa";
import { FadeUp, FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ParallaxSection } from '@/components/animations/MotionWrapper';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

import { CompetencyItem } from '@/types';

const competencies: CompetencyItem[] = [
  {
    title: "Pawon App",
    description: "Develop Back-end Mobile Applications with Flutter, Dart & Supabase Integrated.",
    icons: [
      <SiFlutter key="flutter" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiDart key="dart" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiSupabase key="supabase" style={{ color: "#3ECF8E", fontSize: "1.5rem" }} />,
    ],
    images: ["/Iphone.jpg", "/Iphone2.jpg"],
    link: ""
  },
  {
    title: "Garuda Tribune",
    description: "New's Letter Web based integrated with NewsAPI for PT. Winnicode Garuda Technology.",
    icons: [
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <SiJavascript key="js" style={{ color: "#E7F527", fontSize: "1.5rem" }} />,
    ],
    images: ["/HomeBerita.PNG", "/Homeberita2.PNG"],
    link: "",
    linkedin: "https://www.linkedin.com/company/winnicodegarudateknologi/posts/?feedView=all",
    certificateImage: "/sertifikatmagang.png",
    certificateDescription: "Fullstack Developer Winnicode Garuda Tech (Internship). · May 2025 - August 2025\n\nArchitectural Design and Implementation of a Web-Based News Portal System with Integrated News API Services."
  },
  {
    title: "Deep Learning",
    description: "Brebes Regency temperature forecasting with Long Short-Term Memory model & GUI Tkinter.",
    icons: [
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />
    ],
    images: ["/suhu.png", "/architecturelstm.png"],
    link: "https://github.com/Lutfiandraa/LongShort-TermMemory"
  },
  {
    title: "Gerobar",
    description: "Digitalize Mid Micro Business Toasted Bread Gerobar.",
    icons: [
      <SiVuedotjs key="vue" style={{ color: "#3cb371", fontSize: "1.5rem" }} />,
    ],
    images: ["/Gerobar.png", "/banner.png"],
    link: "https://gerobar-umkm.vercel.app/",
    instagram: "https://www.instagram.com/gerobar_id/"
  },
  {
    title: "Key-In",
    description: "an Travelling web-based, Online Booking Destination website with framework Angular.js and Typescript library react for responsive ui",
    icons: [
      <SiAngular key="angular" style={{ color: "#DD0031", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
    ],
    images: ["/LandingKeyin.png", "/manhattan.png"],
    link: "https://keyin-pariwisata.vercel.app/"
  },
  {
    title: "Royal Merchant",
    description: "Website to aim a trusted global partner by delivering reliable supply, exceptional service, and charcoal products",
    icons: [
      <SiNextdotjs key="next" style={{ color: "#ffffff", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
    ],
    images: ["/Royalmerchant.png", "/OOCLshipping.jpg"],
    link: "https://royalmerchant.vercel.app/"
  },
  {
    title: "Software Testing on Education & Report System HSE",
    description: "Design Implementation and Software Quality Assurance",
    icons: [
      <img
        key="postman"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        alt="Postman"
        style={{ width: "24px", height: "24px" }}
      />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <Image
        key="jest"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="Jest"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/dashboardk3.png", "/workplace-safety-priority.jpg"],
    link: ""
  },
  {
    title: "Cakranegara supported by Hacktiv8",
    description: "Solve ur Business Equipment & Requirement with our AI Chatbot Integrated called 'Mas Cakra-bot'",
    icons: [
      <SiAstro key="astro" style={{ color: "#FF5D01", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
    ],
    images: ["/excapillar.png", "/cakrabot.png"],
    link: "https://cakranegara-equipment.vercel.app/",
    certificateImage: "/Hacktiv8MajubarengAI.jpg",
    certificateDescription: "Maju Bareng AI by Hacktiv8. ·2026\n\nSuccessfully completed the Maju Bareng AI program by Hacktiv8, focusing on integrating Google Gemini AI and Studio for innovative business solutions like the Mas Cakra-bot."
  },
  {
    title: "YOLOv8",
    description: "Computer Vision for Car Adaptive Collision Warning System",
    icons: [
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/defendercollision (compressed).mp4", "/workflow.png", "/Collision.png"],
    link: "https://github.com/Lutfiandraa/CollisionWarning-YOLO",
    category: "computer-vision",
    hideVisitButton: true,
  },
  {
    title: "Plotting Geothermal in Asia",
    description: "Modelling international data Geothermal with Random Forest for Plot Geothermal in Asia",
    icons: [
      <img loading="lazy" decoding="async"
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/AsiaGeothermal.png"],
    link: "",
    category: "data-science",
  },
  {
    title: "Large Language Model (LLM, NLP)",
    description: "AI Agent for Oil Rig Industry Analytics",
    icons: [
      <img
        key="python"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="langflow"
        loading="lazy"
        decoding="async"
        src="https://cdn.simpleicons.org/langflow/FFFFFF"
        alt="Langflow"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/AIAgentLLM.PNG"],
    link: "#",
    category: "data-science",
    certificateImage: "/IBMCompleted.png",
    certificateDescription: "IBM Skillbuild - AI Agent for Oil Rig Industry Analytics. · 2026\n\nImplementation of a Large Language Model (LLM) and Natural Language Processing (NLP) system to create an AI Agent for advanced analytics in the Oil Rig industry."
  },
  {
    title: "GeoSiaga",
    description: "Fullstack frontend & backend with models Random Forest & XGBoost for predict floods in Jakarta",
    icons: [
      <img
        key="docker"
        loading="lazy"
        decoding="async"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
        style={{ width: "24px", height: "24px" }}
      />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <Image
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        width={24}
        height={24}
        style={{ width: "24px", height: "24px" }}
      />,
      <SiFastapi key="fastapi" style={{ color: "#009688", fontSize: "1.5rem" }} />
    ],
    images: ["/GeoSiagaMap.PNG", "/DashboardGeo.PNG"],
    link: "",
    category: "data-science"
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("web");
  const [activeCertificate, setActiveCertificate] = useState<{ image: string; description: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDataScienceProject = (project: CompetencyItem) =>
    project.category === "data-science" ||
    /deep learning|lstm|informer|prediction|python|data scientist|llm|nlp/i.test(
      `${project.title} ${project.description}`
    );

  const isComputerVisionProject = (project: CompetencyItem) =>
    project.category === "computer-vision" ||
    /computer vision|yolo|collision/i.test(
      `${project.title} ${project.description}`
    );

  const filteredCompetencies = competencies.filter((project) =>
    activeCategory === "data-science"
      ? isDataScienceProject(project) && !isComputerVisionProject(project)
      : activeCategory === "computer-vision"
        ? isComputerVisionProject(project)
        : !isDataScienceProject(project) && !isComputerVisionProject(project)
  );

  return (
    <section id="projects" className="section-padding animate-section-in bg-transparent">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeader className="mb-4">
              <span className="text-gradient">Project</span>
          </SectionHeader>
          <FadeUp delay={0.15}>
            <div className="flex items-center justify-center flex-wrap gap-3">
              <CategoryButton category="web" label="Web Development" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              <CategoryButton category="data-science" label="Data Science" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              <CategoryButton category="computer-vision" label="Computer Vision" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompetencies.map((comp, index) => (
            <StaggerItem key={`${activeCategory}-${comp.title}`}>
              <ProjectCard
                comp={comp}
                index={index}
                onOpenCertificate={(image, description) => setActiveCertificate({ image, description })}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {isMounted && activeCertificate && createPortal(
        <div
          className="fixed inset-0 z-[100] w-screen h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 select-none"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="relative max-w-lg w-full bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-page-in transform flex flex-col justify-center m-4 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveCertificate(null);
              }}
              className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors z-[110] hover:scale-105 flex items-center justify-center cursor-pointer"
            >
              <FaTimes size={16} />
            </button>

            <div className="p-1 overflow-hidden flex justify-center items-center">
              <Image
                src={activeCertificate.image}
                alt="Certificate"
                width={600}
                height={400}
                className="max-w-full max-h-[55vh] object-contain rounded-t-xl opacity-95"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            <div className="p-5 bg-gradient-to-b from-transparent to-slate-900/50 overflow-y-auto">
              <h4 className="text-lg font-bold bg-gradient-to-r from-slate-300 via-white to-slate-400 bg-clip-text text-transparent mb-2">
                Certificate Details
              </h4>
              <p className="text-slate-300 text-[13px] whitespace-pre-wrap leading-relaxed">
                {activeCertificate.description}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

function CategoryButton({ category, label, activeCategory, setActiveCategory }: { category: string, label: string, activeCategory: string, setActiveCategory: (c: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => setActiveCategory(category)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm md:text-base transition-all ${activeCategory === category
        ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
        : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
        }`}
    >
      <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse-yellow" />
      {label}
    </button>
  );
}


