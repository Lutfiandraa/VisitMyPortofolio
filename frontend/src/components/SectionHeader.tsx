import React from 'react';
import { FadeUp } from '@/components/animations/MotionWrapper';

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <FadeUp>
      <h2 className={`section-title ${className}`.trim()}>
        {children}
      </h2>
    </FadeUp>
  );
}
