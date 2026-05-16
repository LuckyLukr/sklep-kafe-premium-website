import React from 'react';
import { Coffee, UtensilsCrossed, Wine, MapPin } from 'lucide-react';

export function SectionFeatures_SectionFeatures() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_features" data-section-type="features">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="features" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="max-w-7xl mx-auto px-6 jean-panel-layout">
        <div className="jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true"><h2 className="text-3xl lg:text-5xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Čtyři důvody, proč přijít.</h2></div>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Coffee size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Výběrová káva</h3>
            <p style={{ color: 'var(--color-muted)' }}>Pracujeme s pečlivě vybranými zrnky od pražíren, na kterých záleží. Každý šálek je připraven s péčí – ať si dáte espresso, filtr nebo flat white.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><UtensilsCrossed size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Snídaně a brunch</h3>
            <p style={{ color: 'var(--color-muted)' }}>Poctivé snídaně z lokálních surovin. Brunch, který si zaslouží pomalé ráno. Nabídka se mění podle sezóny a toho, co je zrovna nejlepší.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Wine size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Víno a klidné posezení</h3>
            <p style={{ color: 'var(--color-muted)' }}>Jsme na Pálavě – a to se odráží i v tom, co nabízíme. Moravská vína k posezení, ke konverzaci, k odpočinku. Bez spěchu.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.24s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><MapPin size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Atmosféra Dolních Věstonic</h3>
            <p style={{ color: 'var(--color-muted)' }}>Dolní Věstonice jsou místem s historií, přírodou a klidem. Sklep Kafe je přirozenou součástí tohoto místa – autentický, nekřičící, svůj.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
