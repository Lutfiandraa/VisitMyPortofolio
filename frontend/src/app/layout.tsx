import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import '@fontsource/dm-serif-text';
import '@fontsource/cousine';
import '@fontsource/cousine/700.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TargetCursor from '@/components/TargetCursor';
import PageTransition from '@/components/animations/PageTransition';
import BeamsTheme from '@/components/background/BeamsTheme';
import '@/styles/globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Lutfiandra',
  description: 'Personal portfolio of Lutfi — a passionate frontend developer crafting modern, responsive web experiences.',
  keywords: ['portfolio', 'frontend', 'developer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Lutfi' }],
  openGraph: {
    title: 'Lutfiandra',
    description: 'Personal portfolio in Web Builder, AI engineering and Scalable Software solutions.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="relative min-h-[100dvh] flex flex-col text-[var(--color-text)] antialiased bg-black">
        {/* Background layer */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <BeamsTheme
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* Content layer — must sit above beams */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn={false}
            hoverDuration={0.2}
            targetSelector=".cursor-target, a, button, .hover-target"
          />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
