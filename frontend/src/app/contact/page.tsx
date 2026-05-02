import type { Metadata } from 'next';
import ContactSection from '@/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact — Lutfi Portfolio',
  description: 'Get in touch with Lutfi for collaborations, freelance work, or just a hello.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
