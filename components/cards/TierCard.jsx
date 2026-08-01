import React from 'react';

/** Sponsorship tier card: coloured accent rail, gold label, Anton price, availability, benefits. */
export function TierCard({ accent = 'flag', label, price, availability, benefits = [], style, ...rest }) {
  const accentColor = { flag: 'var(--flag)', bunker: 'var(--bunker)', fairway: 'var(--fairway)' }[accent];
  return (
    <article style={{ background: 'var(--forest)', padding: '0 0 28px', ...style }} {...rest}>
      <div style={{ height: '6px', background: accentColor }} />
      <div style={{ padding: '26px 26px 0' }}>
        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-fine)', fontWeight: 700,
          letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--bunker)', margin: 0 }}>{label}</h3>
        <div style={{ fontFamily: 'var(--font-impact)', fontSize: '2.3rem', color: 'var(--cream)', marginTop: '8px', lineHeight: 1 }}>{price}</div>
        {availability ? <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)',
          color: accentColor, marginTop: '4px', textTransform: 'uppercase' }}>{availability}</div> : null}
        <ul style={{ listStyle: 'none', marginTop: '20px', padding: 0 }}>
          {benefits.map((b, i) => (
            <li key={i} style={{ fontSize: '.9rem', lineHeight: 1.5, color: 'var(--sand)', padding: '7px 0 7px 18px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--bunker)', fontWeight: 700 }}>&middot;</span>{b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
