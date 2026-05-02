import Link from 'next/link';
import type { SocialLink } from '@/types';

const socials: SocialLink[] = [
  { platform: 'GitHub',   url: 'https://github.com/' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/' },
  { platform: 'Twitter',  url: 'https://twitter.com/' },
];

const footerLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-auto">
      <div className="container-max section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-xl font-bold">
              <span className="text-gradient">Lutfi</span>
              <span className="text-[var(--color-text-muted)]">.dev</span>
            </p>
            <p className="text-sm text-[var(--color-text-muted)] max-w-xs">
              Building elegant digital experiences with modern web technologies.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-muted)] hover:text-brand-400 transition-colors"
                  >
                    {s.platform} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] mt-10 pt-6 text-center text-xs text-[var(--color-text-muted)]">
          © {year} Lutfi. Crafted with ♥ using Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
