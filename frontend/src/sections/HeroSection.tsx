import TypedText from '@/components/TypedText';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px]
                   rounded-full bg-brand-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px]
                   rounded-full bg-purple-600/20 blur-[100px]"
      />

      <div className="container-max section-padding relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Headline */}
        <h1 className="section-title text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up [animation-delay:100ms]">
          <TypedText
            strings={[
              "Hi, I'm Lutfiandra Pohan",
            ]}
          />
        </h1>

        {/* Subheadline */}
        <p className="section-subtitle mx-auto mb-10 animate-slide-up [animation-delay:200ms]">
          I craft modern, performant, and accessible web experiences — turning
          complex ideas into elegant interfaces.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:300ms]">
          <a href="/projects" className="btn-primary">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}
