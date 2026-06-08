/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-in-left':'slideInLeft 0.6s ease-out forwards',
        'page-in':      'pageIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'section-in':   'sectionIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'card-in':      'cardIn 0.4s ease-out forwards',
        'pulse-green':  'pulseGreen 3s ease-in-out infinite',
        'pulse-yellow': 'pulseYellow 2s ease-in-out infinite',
        'pulse-red':    'pulseRed 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pageIn: {
          '0%':   { opacity: '0', transform: 'scale(0.98) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        cardIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        sectionIn: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px 3px #4ade80, 0 0 16px 6px #22c55e66' },
          '50%':      { opacity: '0.4', boxShadow: '0 0 2px 1px #4ade8055' },
        },
        pulseYellow: {
          '0%, 100%': { opacity: '0.85', boxShadow: '0 0 4px 2px #fde04799, 0 0 8px 3px #eab30844' },
          '50%':      { opacity: '0.35', boxShadow: '0 0 1px 1px #fde04733' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '0.85', boxShadow: '0 0 4px 2px #f8717199, 0 0 8px 3px #ef444444' },
          '50%':      { opacity: '0.35', boxShadow: '0 0 1px 1px #f8717133' },
        },
      },
    },
  },
  plugins: [],
};
