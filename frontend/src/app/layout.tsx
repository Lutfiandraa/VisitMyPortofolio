import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StardustBackground from '@/components/StardustBackground';
import TargetCursor from '@/components/TargetCursor';
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
    description: 'Personal portfolio showcasing projects and skills.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] antialiased relative">
        <StardustBackground />
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
