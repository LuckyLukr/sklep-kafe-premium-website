import React from 'react';

export function SectionHeader_SectionHeader() {
  return (
    <header data-section-id="section_header" data-section-type="header" className="sticky top-0 z-50" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-line)' }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <span className="text-xl font-bold tracking-tight flex-shrink-0" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Sklep Kafe</span>
        <nav className="hidden md:flex gap-6">
          <a href="#o-miste" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>O místě</a>
          <a href="#nabidka" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Nabídka</a>
          <a href="#galerie" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Galerie</a>
          <a href="#recenze" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Recenze</a>
          <a href="#kontakt" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--color-text)' }}>Kontakt</a>
        </nav>
        
      </div>
    </header>
  );
}
