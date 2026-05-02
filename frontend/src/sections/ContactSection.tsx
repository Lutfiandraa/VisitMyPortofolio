'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/types';

const initialForm: ContactFormData = { name: '', email: '', subject: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: Connect to backend / email API
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-padding animate-section-in">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-3">Contact</p>
          <h2 className="section-title mb-4">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card p-8 md:p-10">
          {status === 'sent' ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-5xl">🎉</span>
              <p className="text-lg font-semibold">Message sent!</p>
              <p className="text-[var(--color-text-muted)] text-sm">I&apos;ll get back to you as soon as possible.</p>
              <button onClick={() => setStatus('idle')} className="btn-outline mt-4">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]
                               text-sm placeholder:text-[var(--color-text-muted)] outline-none
                               focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]
                               text-sm placeholder:text-[var(--color-text-muted)] outline-none
                               focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject" name="subject" type="text" required
                  value={form.subject} onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]
                             text-sm placeholder:text-[var(--color-text-muted)] outline-none
                             focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]
                             text-sm placeholder:text-[var(--color-text-muted)] outline-none resize-none
                             focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
