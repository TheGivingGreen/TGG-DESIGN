import React from 'react';

/** Full-width Flag red statement band. Anton, centered. One per page, maximum. */
export function AccentBand({ children, tone = 'flag', align = 'center', style, ...rest }) {
  return (
    <div style={{
      background: tone === 'flag' ? 'var(--flag)' : 'var(--forest)',
      color: 'var(--cream)', textAlign: align, padding: '30px 20px', ...style
    }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-impact)', fontSize: 'clamp(18px,3vw,26px)',
        letterSpacing: '.04em', textTransform: 'uppercase', lineHeight: 1.2
      }}>{children}</span>
    </div>
  );
}
