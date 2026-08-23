import React from 'react';

// ── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Projects ───────────────────────────────────────────────────────────────
export interface CompetencyItem {
  title: string;
  description: string | React.ReactNode;
  icons: React.ReactNode[];
  images?: string[];
  link: string;
  linkedin?: string;
  instagram?: string;
  certificateImage?: string;
  certificateDescription?: string;
  posterImage?: string;
  category?: string;
  hideVisitButton?: boolean;
}

// ── Skills / Competencies ──────────────────────────────────────────────────
export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// ── Contact Form ───────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── Social Links ───────────────────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
