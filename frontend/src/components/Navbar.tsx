'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';
import type { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-white/10 shadow-lg'
          : 'bg-transparent',
      )}
    >
      <nav className="container-max flex items-center justify-between px-6 h-16 md:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <span className="text-gradient">Lutfi</span>
          <span className="text-[var(--color-text-muted)]">.dev</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  'hover:text-brand-400',
                  pathname === link.href
                    ? 'text-brand-400'
                    : 'text-[var(--color-text-muted)]',
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
        >
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="glass border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-brand-600/20 text-brand-400'
                    : 'text-[var(--color-text-muted)] hover:text-brand-400 hover:bg-white/5',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center mt-2 text-xs py-2">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
