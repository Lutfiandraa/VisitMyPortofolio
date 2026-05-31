import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
  variant?: 'icon-only' | 'with-text';
  hoverColorClass?: string;
}

export default function SocialLink({ href, icon, label, variant = 'icon-only', hoverColorClass = '' }: SocialLinkProps) {
  if (variant === 'with-text') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-700/80 text-lg transition-all flex items-center gap-2 border border-slate-700/30 hover:border-slate-600/50"
      >
        {icon}
        {label && <span className="text-xs font-medium">{label}</span>}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 hover:bg-brand-500/20 hover:border-brand-500/40 transition-all duration-300 text-xl shadow-lg ${hoverColorClass}`.trim()}
      title={label}
    >
      {icon}
    </a>
  );
}
