'use client';

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  SiDart, SiFlutter, SiJavascript, SiReact, SiVuedotjs,
  SiAngular, SiTypescript, SiNextdotjs, SiNodedotjs, SiGatsby, SiAstro, SiFastapi
} from "react-icons/si";
import {
  FaPaperPlane, FaInstagram, FaLinkedin, FaCertificate,
  FaChevronLeft, FaChevronRight, FaTimes, FaGithub
} from "react-icons/fa";

interface CompetencyItem {
  title: string;
  description: string;
  icons: React.ReactNode[];
  images?: string[];
  link: string;
  linkedin?: string;
  instagram?: string;
  certificateImage?: string;
  certificateDescription?: string;
  category?: string;
  hideVisitButton?: boolean;
}

const competencies: CompetencyItem[] = [
  {
    title: "Pawon App",
    description: "Develop Back-end Mobile Applications with Flutter, Dart & Supabase Integrated.",
    icons: [
      <SiFlutter key="flutter" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiDart key="dart" style={{ color: "#02569B", fontSize: "1.5rem" }} />,
    ],
    images: ["/Iphone.jpg", "/Iphone2.jpg"],
    link: "https://github.com/Lutfiandraa/Pawon-main"
  },
  {
    title: "Garuda Tribune",
    description: "New's Letter Web based integrated with NewsAPI for PT. Winnicode Garuda. (Maintenance API control)",
    icons: [
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <SiJavascript key="js" style={{ color: "#E7F527", fontSize: "1.5rem" }} />,
    ],
    images: ["/HomeBerita.PNG", "/Homeberita2.PNG"],
    link: "https://portal-berita-px6z.vercel.app/",
    linkedin: "https://www.linkedin.com/company/winnicodegarudateknologi/posts/?feedView=all",
    certificateImage: "/sertifikatmagang.png",
    certificateDescription: "Fullstack Developer Winnicode Garuda Tech (Internship). · May 2025 - August 2025\n\nArchitectural Design and Implementation of a Web-Based News Portal System with Integrated News API Services."
  },
  {
    title: "Deep Learning",
    description: "Brebes Regency temperature forecasting with Long Short-Term Memory model & GUI Tkinter.",
    icons: [
      <img
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
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
      <SiNodedotjs key="node" style={{ color: "#339933", fontSize: "1.5rem" }} />,
      <SiReact key="react" style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <img
        key="jest"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="Jest"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/dashboardk3.png", "/workplace-safety-priority.jpg"],
    link: "https://sistem-kesehatan-dan-kesalamatan-ke.vercel.app/"
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
      <img
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/workflow.png", "/defender.png", "/Collision.png"],
    link: "https://github.com/Lutfiandraa/CollisionWarning-YOLO",
    category: "computer-vision",
    hideVisitButton: true,
  },
  {
    title: "Plotting Geothermal in Asia",
    description: "Modelling international data Geothermal with Random Forest for Plot Geothermal in Asia",
    icons: [
      <img
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        style={{ width: "24px", height: "24px" }}
      />,
      <img
        key="langflow"
        src="https://cdn.simpleicons.org/langflow/FFFFFF"
        alt="Langflow"
        style={{ width: "24px", height: "24px" }}
      />,
    ],
    images: ["/AIAgentLLM.PNG"],
    link: "#",
    category: "data-science",
    certificateImage: "/LLM Certified.PNG",
    certificateDescription: "IBM Skillbuild - AI Agent for Oil Rig Industry Analytics. · 2026\n\nImplementation of a Large Language Model (LLM) and Natural Language Processing (NLP) system to create an AI Agent for advanced analytics in the Oil Rig industry."
  },
  {
    title: "GeoSiaga",
    description: "Fullstack frontend & backend with models Random Forest & XGBoost for predict floods in Jakarta",
    icons: [
      <SiNextdotjs key="next" style={{ color: "#ffffff", fontSize: "1.5rem" }} />,
      <SiTypescript key="ts" style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <img
        key="python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
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
          <h2 className="section-title mb-4">
            <span className="text-gradient">Project</span>
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("web")}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${activeCategory === "web"
                ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
                }`}
            >
              Web Development
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("data-science")}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${activeCategory === "data-science"
                ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
                }`}
            >
              Data Science
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("computer-vision")}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${activeCategory === "computer-vision"
                ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
                }`}
            >
              Computer Vision
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompetencies.map((comp, index) => (
            <Card
              key={`${activeCategory}-${comp.title}`}
              comp={comp}
              index={index}
              onOpenCertificate={(image, description) => setActiveCertificate({ image, description })}
            />
          ))}
        </div>
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
              <img
                src={activeCertificate.image}
                alt="Certificate"
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

function Card({ comp, index, onOpenCertificate }: { comp: CompetencyItem; index: number; onOpenCertificate: (image: string, desc: string) => void }) {
  const [current, setCurrent] = useState(0);
  const images = comp.images;
  const hasImages = images && images.length > 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images) setCurrent((prev) => (prev + 1) % images.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images) setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };


  return (
    <div
      className="card p-6 group flex flex-col gap-4 animate-card-in transform transition-all duration-300 hover:border-brand-500/50 hover:scale-[1.02]"
    >
      {/* Slider Gambar / Placeholder */}
      <div className="relative mb-2 overflow-hidden rounded-xl bg-black/20 h-40">
        {hasImages ? (
          <>
            <img
              src={comp.images![current]}
              alt={comp.title}
              className="h-full w-full object-cover opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </>
        ) : (
          <div className="h-full w-full bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
            <span className="text-white/30 text-xs">No image</span>
          </div>
        )}

        {/* Navigasi Kiri/Kanan */}
        {hasImages && comp.images!.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FaChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      {/* Judul + Certified */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {comp.title.includes("Hacktiv8") ? (
            <>
              {comp.title.split("Hacktiv8")[0]}
              <span className="text-orange-500">Hacktiv8</span>
              {comp.title.split("Hacktiv8")[1]}
            </>
          ) : (
            comp.title
          )}
        </h3>
        {comp.certificateImage && (
          <button
            onClick={() => onOpenCertificate(comp.certificateImage!, comp.certificateDescription!)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-500/50 rounded-lg transition-colors"
          >
            <FaCertificate className="text-xs" />
            Certified
          </button>
        )}
      </div>

      {/* Deskripsi */}
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
        {comp.description}
      </p>

      {/* Ikon + Tautan */}
      <div className="flex items-center justify-between text-xl text-white/90 border-t border-[var(--color-border)] pt-3">
        <div className="flex space-x-3 items-center">
          {comp.icons.map((icon, i) => (
            <span key={i} className="flex items-center justify-center">
              {icon}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {comp.linkedin && (
            <a
              href={comp.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#0A66C2] hover:text-[#3B82F6] transition-all duration-300 px-2 py-1.5"
              title="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedin className="text-base" />
            </a>
          )}
          {comp.instagram && (
            <a
              href={comp.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[#E1306C] hover:text-[#F56040] transition-all duration-300 px-2 py-1.5"
              title="Instagram"
              onClick={(e) => e.stopPropagation()}
            >
              <FaInstagram className="text-base" />
            </a>
          )}
          {comp.link && comp.link.includes("github.com") && (
            <a
              href={comp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 px-2 py-1.5"
              title="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-base" />
            </a>
          )}
          {comp.link && comp.link !== "#" && !comp.hideVisitButton && (
            <a
              href={comp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 hover:from-slate-200 hover:via-white hover:to-slate-300 text-slate-900 transition-all duration-300 shadow hover:shadow-md border border-white/20 rounded-xl px-5 py-1.5"
              title="Visit Project"
              onClick={(e) => e.stopPropagation()}
            >
              <FaPaperPlane className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
