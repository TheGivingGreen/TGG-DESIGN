import React from 'react';

/** Proof-point tile. Anton figure in Bunker gold on a barely-there cream wash. */
export function StatCard({ value, label, style, ...rest }) {
  return (
    <div style={{ background: 'rgba(255,252,245,.05)', padding: '24px', ...style }} {...rest}>
      <b style={{ display: 'block', fontFamily: 'var(--font-impact)', fontSize: '2rem', fontWeight: 400, color: 'var(--bunker)', lineHeight: 1 }}>{value}</b>
      <span style={{ fontSize: '.85rem', lineHeight: 1.4, display: 'block', marginTop: '8px', color: 'var(--cream)' }}>{label}</span>
    </div>
  );
}

/** Auto-fit grid of StatCards. 200px minimum column. */
export function StatGrid({ children, style, ...rest }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '14px', ...style }} {...rest}>{children}</div>;
}
