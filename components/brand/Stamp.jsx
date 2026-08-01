import React from 'react';

/** Hard-bordered uppercase box. Dates, locations, credentials. No radius, no fill. */
export function Stamp({ children, onDark = false, size = 'md', style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px',
      border: '1.5px solid ' + (onDark ? 'rgba(255,252,245,.3)' : 'var(--forest)'),
      color: onDark ? 'var(--cream)' : 'var(--forest)',
      padding: size === 'sm' ? '9px 18px' : '11px 22px',
      fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: size === 'sm' ? 'var(--fs-fine)' : 'clamp(13px,1.6vw,16px)',
      letterSpacing: 'var(--ls-button)', textTransform: 'uppercase', ...style
    }} {...rest}>{children}</span>
  );
}

/** The gold interpunct that separates stamp segments. */
export function StampDot() {
  return <span style={{ color: 'var(--bunker)', margin: '0 10px' }}>&middot;</span>;
}
