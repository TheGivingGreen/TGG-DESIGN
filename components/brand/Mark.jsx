import React from 'react';

const MARK_SRC = {
  full: 'assets/images/logos/logo-heart-flag.svg',
  cream: 'assets/images/logos/logo-heart-flag-cream.svg',
  lockup: 'assets/images/logos/logo-heart-flag-fore-good.png'
};

/** The heart-flag mark. Four supplied files, never redrawn. */
export function Mark({ variant = 'full', size = 46, base = '', withWordmark = false, onDark = false, style, ...rest }) {
  const img = (
    <img src={(base ? base.replace(/\/$/, '') + '/' : '') + MARK_SRC[variant]} alt="The Giving Green"
      style={{ width: size + 'px', height: 'auto', display: 'block', flex: 'none' }} />
  );
  if (!withWordmark) return <span style={{ display: 'inline-flex', ...style }} {...rest}>{img}</span>;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', ...style }} {...rest}>
      {img}
      <span style={{
        fontFamily: 'var(--font-ceremonial)', fontWeight: 700, fontSize: Math.round(size * 0.5) + 'px',
        color: onDark ? 'var(--cream)' : 'var(--forest)'
      }}>The Giving Green</span>
    </span>
  );
}
