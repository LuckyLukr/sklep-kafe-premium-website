import React from 'react';

export function SectionGallery_SectionGallery() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_gallery" data-section-type="gallery">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="gallery" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 jean-panel-layout">
        <div className="jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true"><h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Nechte se unést.</h2><div className="flex flex-col gap-4"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_gallery_sub\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6\">Interiér, detaily servírování, ranní světlo přes okno, sklenka vína na podvečer. To je Sklep Kafe.</p>" }} /></div></div>
        <div className="jean-gallery-columns lg:grid-cols-2 gap-4">
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-gallery-card--featured jean-parallax-subtle" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g1/900/700" alt="Výběrová káva v Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Výběrová káva připravená s péčí</figcaption>
          </figure>
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g2/700/900" alt="Interiér Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Teplý interiér plný detailů</figcaption>
          </figure>
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g3/900/600" alt="Brunch v Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Poctivé suroviny, sezónní nabídka</figcaption>
          </figure>
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.24s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g4/700/900" alt="Víno na Pálavě – Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Moravská vína v srdci vinařské krajiny</figcaption>
          </figure>
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.32s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g5/900/700" alt="Detail servírování v Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Každý talíř i šálek s přesností</figcaption>
          </figure>
          <figure className="jean-soft-shadow rounded-2xl overflow-hidden jean-float jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.4s' }}>
            <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: 'var(--color-image-placeholder)' }}><img src="https://picsum.photos/seed/sklepkafe-g6/800/800" alt="Posezení v Sklep Kafe" className="w-full h-full object-cover" /></div>
            <figcaption className="px-4 py-3 text-sm" style={{ color: 'var(--color-muted)' }}>Dolní Věstonice, Pálava</figcaption>
          </figure>
        </div>
        <div className="mt-10 flex flex-col gap-5"><div dangerouslySetInnerHTML={{ __html: "<span data-block-id=\"block_gallery_tag\" data-block-type=\"tag\" style=\"display:inline-block;padding:.25rem .625rem;border-radius:9999px;font-size:.75rem;font-weight:500;color:var(--color-text);background-color:var(--color-card);border:1px solid var(--color-line)\">Atmosféra</span>" }} /></div>
      </div>
    </section>
    </div>
  );
}
