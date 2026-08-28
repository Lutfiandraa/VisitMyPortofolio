import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

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

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
