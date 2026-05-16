import React from 'react';

export function SectionHero_SectionHero() {
  return (
    <section data-section-id="section_hero" data-section-type="hero" className="jean-bg-spotlight jean-scroll-stage jean-hero-stage py-20 lg:py-28 relative overflow-hidden" data-jean-parallax-root="hero" style={{ backgroundColor: 'var(--color-surface-strong)' }}>

      <div className="jean-hero-shell">
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="flex-1 flex flex-col gap-6 jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>SKLEP KAFE</h1>
          <p className="text-lg" style={{ color: 'var(--color-muted)' }}>Výběrová káva, poctivé snídaně a sklenka vína v srdci Pálavy. Sklep Kafe je zastávka, na kterou se vrací.</p>
          <div><a href="#o-miste" className="jean-float inline-block px-8 py-3 rounded-full font-semibold text-white shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}>Objevte Sklep Kafe</a></div>
        </div>
        <div className="flex-1 jean-panel-sticky jean-motion-layer jean-parallax-down" data-jean-reveal="true">
          <div className="jean-soft-shadow rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
            <img src="https://picsum.photos/seed/sklepkafe-hero/1200/900" alt="Atmosféra Sklep Kafe – káva a interiér v Dolních Věstonicích" className="w-full h-full object-cover" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
