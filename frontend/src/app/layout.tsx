import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TargetCursor from '@/components/TargetCursor';
import Particle from '@/components/Particle';
import Script from 'next/script';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lutfiandra',
  description:
    'Personal portfolio of Lutfi — a passionate frontend developer crafting modern, responsive web experiences.',
  keywords: ['portfolio', 'frontend', 'developer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Lutfi' }],

  openGraph: {
    title: 'Lutfiandra',
    description:
      'Personal portfolio in Web Builder, AI engineering and Scalable Software solutions.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-[100dvh] flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] antialiased relative">
        <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="beforeInteractive" />
        <Particle id="particles-js" />
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
          targetSelector=".cursor-target, a, button, .hover-target"
        />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
