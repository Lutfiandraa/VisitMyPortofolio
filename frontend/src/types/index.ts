// ── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ── Projects ───────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// ── Skills / Competencies ──────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number; // 0–100
  category: 'frontend' | 'backend' | 'tooling' | 'design';
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
