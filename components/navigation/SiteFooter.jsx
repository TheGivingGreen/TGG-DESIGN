import React from 'react';
import { Mark } from '../brand/Mark.jsx';
import { Ceremonial } from '../core/Ceremonial.jsx';

/** Shadow-ink footer: Anton creed, ceremonial line, three columns, fine print. */
export function SiteFooter({ creed = 'The Giving Green', ceremonial = 'Party Fore a Great Cause.', columns = [], fineLeft, tagline = 'Fore Good.', base = '', style, ...rest }) {
  return (
    <footer style={{ background: 'var(--shadow-ink)', color: 'var(--cream)', padding: 'clamp(44px,7vh,72px) clamp(20px,4vw,48px) 32px', ...style }} {...rest}>
      <div style={{ textAlign: 'center', marginBottom: '52px', paddingBottom: '48px', borderBottom: '1px solid var(--line-on-dark-soft)' }}>
        <div style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
          fontSize: 'clamp(44px,9vw,110px)', lineHeight: .88, color: 'var(--cream)' }}>{creed}</div>
        <Ceremonial tone="bunker" style={{ fontSize: 'clamp(18px,2.5vw,28px)', marginTop: '10px' }}>{ceremonial}</Ceremonial>
      </div>
      <div style={{ maxWidth: 'var(--w-content)', margin: '0 auto', display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '260px' }}>
          <Mark variant="cream" size={38} base={base} />
          <div style={{ fontFamily: 'var(--font-ceremonial)', fontSize: '18px', fontWeight: 700 }}>The Giving Green</div>
          <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--cream-35)', lineHeight: 1.6 }}>
            The Second Annual Charity Pub Golf Crawl. October 3, 2026. Soulard, St. Louis.
          </div>
        </div>
        {columns.map((col, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {col.map((l) => (
              <a key={l.href} href={l.href} style={{ color: 'var(--cream-60)', textDecoration: 'none',
                fontSize: 'var(--fs-caption)', fontWeight: 600, letterSpacing: '.06em' }}>{l.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 'var(--w-content)', margin: '40px auto 0', borderTop: '1px solid var(--line-on-dark-soft)',
        paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
        gap: '10px', fontSize: 'var(--fs-fine)', color: 'var(--cream-28)', letterSpacing: '.05em' }}>
        <span>{fineLeft || '\u00A9 2026 The Giving Green \u00B7 St. Louis, MO'}</span>
        <Ceremonial tone="bunker" size="sm" style={{ fontSize: 'var(--fs-caption)' }}>{tagline}</Ceremonial>
      </div>
    </footer>
  );
}
