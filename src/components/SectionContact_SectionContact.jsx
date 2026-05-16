import React from 'react';

export function SectionContact_SectionContact() {
  return (
    <div className="jean-motion-layer" data-jean-reveal="true" data-section-id="section_contact" data-section-type="contact">
    <section id="contact" className="py-20 lg:py-28 jean-section-shell" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="jean-rhythm-tight mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-5" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Těšíme se na vás.</h2>
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-4"><div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_contact_sub\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6\">Přijeďte, zastavte se a nechte se pohostit. Jsme tu pro vás – ráno i odpoledne, ve všední den i o víkendu.</p>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<p data-block-id=\"block_contact_location_note\" data-block-type=\"text.paragraph\" style=\"color:var(--color-text);line-height:1.6\">Kde nás najdete: Jsme v centru Dolních Věstonic, snadno dostupní z pálavské cyklostezky i z hlavní silnice. Parkování je k dispozici v blízkosti podniku.</p>" }} /></div>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_name\" data-block-type=\"contact_info\" style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Podnik</strong><span style=\"color:var(--color-muted)\">Sklep Kafe</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_address\" data-block-type=\"contact_info\" style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Adresa</strong><span style=\"color:var(--color-muted)\">Dolní Věstonice 296, 691 29 Dolní Věstonice</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_phone\" data-block-type=\"contact_info\" style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Telefon</strong><span style=\"color:var(--color-muted)\">+420 603 576 670</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_email\" data-block-type=\"contact_info\" style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">E-mail</strong><span style=\"color:var(--color-muted)\">v.macanova@seznam.cz</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_hours\" data-block-type=\"contact_info\" style=\"padding:1rem 1.25rem;border-radius:1rem;background:var(--color-surface);border:1px solid rgba(0,0,0,.08)\"><strong style=\"display:block;color:var(--color-text);margin-bottom:.25rem\">Otevírací doba</strong><span style=\"color:var(--color-muted)\">Aktuální otevírací dobu ověřte telefonicky nebo na sociálních sítích.</span></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<span data-block-id=\"block_contact_tag\" data-block-type=\"tag\" style=\"display:inline-block;padding:.25rem .625rem;border-radius:9999px;font-size:.75rem;font-weight:500;color:var(--color-text);background-color:var(--color-card);border:1px solid var(--color-line)\">Kontakt a návštěva</span>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_cta_phone\" data-block-type=\"button\"><a href=\"tel:+420603576670\" style=\"display:inline-block;padding:.75rem 1.75rem;border-radius:9999px;font-weight:600;color:#fff;background-color:var(--color-primary)\">Zavolat nám</a></div>" }} />
          <div dangerouslySetInnerHTML={{ __html: "<div data-block-id=\"block_contact_cta_email\" data-block-type=\"button\"><a href=\"mailto:v.macanova@seznam.cz\" style=\"display:inline-block;padding:.75rem 1.75rem;border-radius:9999px;font-weight:600;color:#fff;background-color:var(--color-primary)\">Napsat e-mail</a></div>" }} />
        </div>
      </div>
    </section>
    </div>
  );
}
