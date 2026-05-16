import React from 'react';

export function SectionAbout_SectionAbout() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_about" data-section-type="about">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1"><div className="jean-soft-shadow rounded-3xl overflow-hidden aspect-square flex items-center justify-center"><img src="https://picsum.photos/seed/sklepkafe-about/900/700" alt="Interiér Sklep Kafe – teplá atmosféra a detail servírování" className="w-full h-full object-cover" /></div></div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Sklep Kafe není jen kavárna.</h2>
          <div dangerouslySetInnerHTML={{ __html: "<span data-block-id=\"block_about_tag\" data-block-type=\"tag\" style=\"display:inline-block;padding:.25rem .625rem;border-radius:9999px;font-size:.75rem;font-weight:500;color:var(--color-text);background-color:var(--color-card);border:1px solid var(--color-line)\">O místě</span>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_about_p1\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6\">Je to místo, kde se na chvíli zastavíte. Kde ranní káva chutná jinak, protože ji doprovází tichý pohled na Pálavu. Kde snídaně není spěch, ale rituál. Kde se odpoledne protáhne do podvečera a sklenka vína přijde přesně ve správný čas.</p>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_about_p2\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6\">Sklep Kafe vznikl jako prostor pro ty, kteří si cení atmosféry stejně jako toho, co mají v šálku nebo na talíři. Najdete nás v Dolních Věstonicích – v jedné z nejkrásnějších vinařských obcí jižní Moravy.</p>" }} />
        </div>
      </div>
    </section>
    </div>
  );
}
