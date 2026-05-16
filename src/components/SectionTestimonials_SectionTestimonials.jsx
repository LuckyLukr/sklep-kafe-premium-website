import React from 'react';

export function SectionTestimonials_SectionTestimonials() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_testimonials" data-section-type="testimonials">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="testimonials" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="jean-rhythm-wide mx-auto px-6 jean-panel-layout">
        <div className="jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true"><h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Slova, která nás hřejí.</h2></div>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-pullquote-card lg:col-span-2" data-jean-reveal="true" style={{ transitionDelay: '0s', paddingTop: '3.5rem' }}>
            <p className="italic mb-4 text-2xl lg:text-4xl leading-tight" style={{ color: 'var(--color-muted)' }}>"Přijeli jsme na víkend na Pálavu a Sklep Kafe byl jednoznačně nejlepší objev celého výletu. Káva výborná, snídaně poctivá, atmosféra přesně taková, jakou hledáte, když chcete na chvíli vypnout."</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Tereza K.</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Brno</p>
          </div>
          <div className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s', paddingTop: '1.5rem' }}>
            <p className="italic mb-4 " style={{ color: 'var(--color-muted)' }}>"Konečně místo na Pálavě, které bere kvalitu vážně. Výběrová káva, hezky servírované jídlo a klid. Určitě se vrátíme."</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Martin Ř.</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Praha</p>
          </div>
          <div className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s', paddingTop: '1.5rem' }}>
            <p className="italic mb-4 " style={{ color: 'var(--color-muted)' }}>"Milé obsluze, krásný interiér a skvělé víno. Strávili jsme tu celé odpoledne a vůbec nám to nepřišlo. Přesně to jsme hledali."</p>
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>Lucie a Ondřej V.</p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Brno</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
