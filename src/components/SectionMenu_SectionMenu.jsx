import React from 'react';

export function SectionMenu_SectionMenu() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_menu" data-section-type="menu">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Co vás čeká.</h2>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Espresso</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>55 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Káva</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Výběrová zrna, precizní příprava, plná chuť.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Flat White</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>79 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Káva</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Jemná textura mléka, silná kávová báze.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Filtrovaná káva</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>75 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Káva</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Pour over nebo batch brew – čistá, aromatická, bez spěchu.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.24s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Sezónní snídaně</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>Od 149 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Snídaně &amp; Brunch</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Pečivo, vejce, lokální sýry a zelenina – sestaveno podle toho, co je právě nejlepší.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.32s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Avokádo na toastu</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>169 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Snídaně &amp; Brunch</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Kváskový chléb, avokádo, vejce, semínka, bylinky.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Brunchový talíř</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>229 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Snídaně &amp; Brunch</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Výběr studené kuchyně, pečivo, vejce, sezónní přílohy.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.48s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Moravské víno sklenka</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>Od 79 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Víno</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Rotující výběr moravských vín – bílé, červené, rosé.</p>
          </article>
          <article className="jean-soft-shadow jean-float p-6 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.48s' }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Lahvová vína</h3>
              <span className="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap" style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 14%, white)', color: 'var(--color-primary)' }}>Od 390 Kč</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--color-primary)' }}>Víno</p>
            <p className="text-sm leading-6" style={{ color: 'var(--color-muted)' }}>Výběr lahvových vín od místních i regionálních vinařů.</p>
          </article>
        </div>
      </div>
    </section>
    </div>
  );
}
