import React from 'react';

/** Numbered section eyebrow: "01 · The Course · Soulard". Bunker gold on both surfaces. */
export function Eyebrow({ children, rule = false, tone = 'bunker', style, ...rest }) {
  const color = tone === 'bunker' ? 'var(--bunker)' : tone === 'fairway' ? 'var(--fairway)' : 'var(--cream-60)';
  return (
    <p style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color, margin: 0, ...style
    }} {...rest}>
      {rule ? <span style={{ display: 'block', width: '28px', height: '2px', background: 'currentColor', flex: 'none' }} /> : null}
      {children}
    </p>
  );
}
