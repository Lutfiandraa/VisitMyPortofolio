import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCertificate, FaLinkedin, FaInstagram, FaGithub, FaPaperPlane, FaImage } from "react-icons/fa";
import { CompetencyItem } from "@/types";

interface ProjectCardProps {
  comp: CompetencyItem;
  index: number;
  onOpenCertificate: (image: string, desc: string, title?: string) => void;
  containImage?: boolean;
}

export default function ProjectCard({ comp, index, onOpenCertificate, containImage }: ProjectCardProps) {
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
    <div className="card p-6 group flex flex-col gap-4 animate-card-in transform transition-all duration-300 hover:border-brand-500/50 hover:scale-[1.02] rounded-xl h-full">
      {/* Slider Gambar / Placeholder */}
      <div className="relative mb-2 overflow-hidden rounded-xl bg-black/20 h-48">
        {hasImages ? (
          <>
            {comp.images![current].endsWith('.mp4') ? (
              <video
                src={comp.images![current]}
                className={`h-full w-full opacity-80 ${containImage ? 'object-contain' : 'object-cover'}`}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img loading="lazy" decoding="async"
                src={comp.images![current]}
                alt={comp.title}
                className={`h-full w-full opacity-80 ${containImage ? 'object-contain' : 'object-cover'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity"
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
          ) : comp.title.includes("Winnicode Garuda Teknologi") ? (
            <>
              {comp.title.split("Winnicode Garuda Teknologi")[0]}
              <span className="bg-gradient-to-r from-[#DA70D6] via-slate-200 to-[#FF00FF] bg-clip-text text-transparent drop-shadow-sm">
                Winnicode Garuda Teknologi
              </span>
              {comp.title.split("Winnicode Garuda Teknologi")[1]}
            </>
          ) : (
            comp.title
          )}
        </h3>
        <div className="flex gap-2 shrink-0">
          {comp.certificateImage && (
            <button
              onClick={() => onOpenCertificate(comp.certificateImage!, comp.certificateDescription!, "Certificate Details")}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-500/50 rounded-lg transition-colors whitespace-nowrap"
            >
              <FaCertificate className="text-xs" />
              Certified
            </button>
          )}
          {comp.posterImage && (
            <button
              onClick={() => onOpenCertificate(comp.posterImage!, "Poster Tugas Akhir", "Poster Details")}
              className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-slate-900 bg-gradient-to-r from-slate-200 to-slate-400 hover:from-white hover:to-slate-300 rounded-lg transition-all duration-300 shadow hover:shadow-md whitespace-nowrap"
            >
              View Poster
            </button>
          )}
        </div>
      </div>

      {/* Deskripsi */}
      <div className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
        {typeof comp.description === 'string' ? (
          <p className="line-clamp-3">{comp.description}</p>
        ) : (
          comp.description
        )}
      </div>

      {/* Ikon + Tautan */}
      <div className="flex items-center justify-between text-xl text-white/90 border-t border-[var(--color-border)] pt-3">
        <div className="flex space-x-3 items-center" suppressHydrationWarning>
          {comp.icons.map((icon, i) => (
            <span key={i} className="flex items-center justify-center" suppressHydrationWarning>
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
