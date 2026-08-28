'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/MotionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { CompetencyItem } from '@/types';

const CARD_WIDTH = 392; // 360px card + 32px gap

interface ProjectSliderProps {
  /** Text shown in the badge label */
  label: string;
  /** Tailwind classes for the animated dot, e.g. "bg-yellow-300 animate-pulse-yellow" */
  dotClass: string;
  /** Projects to render in this slider */
  projects: CompetencyItem[];
  /** Callback forwarded to each ProjectCard */
  onOpenCertificate: (image: string, description: string, title?: string) => void;
  /** Extra class applied to the outer wrapper div */
  wrapperClassName?: string;
}

export default function ProjectSlider({
  label,
  dotClass,
  projects,
  onOpenCertificate,
  wrapperClassName = '',
}: ProjectSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    // Use a large tolerance (half a card width) to detect if we are at the ends.
    // This handles smooth scrolling delays and fast consecutive clicks.
    const maxScroll = scrollWidth - clientWidth;
    const isAtEnd = scrollLeft >= maxScroll - CARD_WIDTH / 2;
    const isAtStart = scrollLeft <= CARD_WIDTH / 2;

    if (direction === 'right') {
      if (isAtEnd) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
      }
    } else {
      if (isAtStart) {
        sliderRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={wrapperClassName}>
      {/* Badge label */}
      <FadeUp delay={0.1}>
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm md:text-base bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]">
            <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            {label}
          </span>
        </div>
      </FadeUp>

      {/* Scrollable area with nav buttons */}
      <div className="relative">
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label={`${label} scroll left`}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity items-center justify-center"
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label={`${label} scroll right`}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-10 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-opacity items-center justify-center"
        >
          <FaChevronRight size={14} />
        </button>

        <div
          ref={sliderRef}
          className="overflow-x-auto pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <StaggerContainer className="flex flex-row gap-8 w-max">
            {projects.map((comp, index) => (
              <StaggerItem key={comp.title} className="w-[360px] snap-start shrink-0">
                <ProjectCard
                  comp={comp}
                  index={index}
                  onOpenCertificate={onOpenCertificate}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}

// Preserved from ProjectSection for future use (filter UI, etc.)
export function CategoryButton({
  category,
  label,
  activeCategory,
  setActiveCategory,
}: {
  category: string;
  label: string;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => setActiveCategory(category)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm md:text-base transition-all ${
        activeCategory === category
          ? 'bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]'
          : 'bg-transparent text-white/70 border-white/20 hover:bg-white/5'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          category === 'data-science'
            ? 'bg-green-400 animate-pulse-green'
            : category === 'computer-vision'
            ? 'bg-red-400 animate-pulse-red'
            : 'bg-yellow-300 animate-pulse-yellow'
        }`}
      />
      {label}
    </button>
  );
}
