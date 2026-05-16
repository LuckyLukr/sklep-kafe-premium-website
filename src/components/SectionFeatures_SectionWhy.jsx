import React from 'react';
import { Star, Leaf, Clock, Heart } from 'lucide-react';

export function SectionFeatures_SectionWhy() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_why" data-section-type="features">
    <section className="py-20 lg:py-28 jean-scroll-stage jean-section-shell" data-jean-parallax-root="features" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 jean-panel-layout">
        <div className="jean-panel-sticky jean-motion-layer jean-parallax-subtle" data-jean-reveal="true"><h2 className="text-3xl lg:text-5xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Místo, které si zapamatujete.</h2></div>
        <div className="jean-stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Star size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Prostředí s charakterem</h3>
            <p style={{ color: 'var(--color-muted)' }}>Žádná řetězcová kavárna. Sklep Kafe má svůj vlastní charakter, svůj rytmus a svou atmosféru.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.08s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Leaf size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Příjemná zastávka na Pálavě</h3>
            <p style={{ color: 'var(--color-muted)' }}>Ať přijíždíte na výlet, procházku nebo jen tak – Sklep Kafe je ideální místo pro zastavení.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-up" data-jean-reveal="true" style={{ transitionDelay: '0.16s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Clock size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Pro pomalé ráno i podvečer</h3>
            <p style={{ color: 'var(--color-muted)' }}>Ranní káva nebo odpolední sklenka vína. Jsme tu pro obojí – a na spěch tu nikdo netlačí.</p>
          </div>
          <div className="jean-soft-shadow jean-float p-8 rounded-2xl jean-motion-layer jean-stagger-card jean-parallax-down" data-jean-reveal="true" style={{ transitionDelay: '0.24s' }}>
            
            <div className="mb-4" style={{ color: 'var(--color-primary)' }}><Heart size={32} /></div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Pečlivost v každém detailu</h3>
            <p style={{ color: 'var(--color-muted)' }}>Od výběru kávy přes složení talíře až po to, jak u nás vypadá stůl. Na detailech nám záleží.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
