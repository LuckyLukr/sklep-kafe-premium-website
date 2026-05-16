import React from 'react';

export function SectionFaq_SectionFaq() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_faq" data-section-type="faq">
    <section className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Než přijedete.</h2>
        <div className="space-y-4">
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Kde přesně Sklep Kafe najdu?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>Najdete nás na adrese Dolní Věstonice 296, 691 29 Dolní Věstonice. Jsme v centru obce, kousek od přehrady a vinařské stezky. Navigace vás dovede přesně.</p>
          </details>
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Musím si rezervovat místo předem?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>Rezervace není nutná – rádi vás uvítáme i bez předchozího ohlášení. O víkendech a ve špičce sezóny doporučujeme zavolat nebo napsat předem, abychom pro vás měli místo jistě připravené.</p>
          </details>
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Co všechno Sklep Kafe nabízí?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>Výběrovou kávu, filtrovanou kávu, snídaně a brunchové talíře ze sezónních surovin, moravská vína a nealkoholické nápoje. Nabídka se průběžně mění.</p>
          </details>
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Je Sklep Kafe vhodný i pro turisty a víkendové návštěvníky?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>Rozhodně ano. Velká část našich hostů přijíždí na výlet na Pálavu a Sklep Kafe je přirozenou zastávkou jejich dne. Vítáme páry, přátele i menší skupiny.</p>
          </details>
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Jak vás nejlépe kontaktuji?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>Nejrychleji telefonicky na čísle +420 603 576 670. Můžete nám také napsat na e-mail v.macanova@seznam.cz. Rádi odpovíme na jakékoliv dotazy.</p>
          </details>
          <details className="p-4 rounded-xl jean-card">
            <summary className="font-semibold cursor-pointer" style={{ color: 'var(--color-text)' }}>Máte venkovní sezení?</summary>
            <p className="mt-2" style={{ color: 'var(--color-muted)' }}>V letní sezóně nabízíme i venkovní posezení. Přesné informace o aktuální dostupnosti zjistíte nejlépe telefonicky nebo přímo na místě.</p>
          </details>
        </div>
      </div>
    </section>
    </div>
  );
}
