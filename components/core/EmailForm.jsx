import React from 'react';

/** The capture field: input and submit fused inside one pill, on a Flag red band. */
export function EmailForm({ placeholder = 'your@email.com', cta = 'Notify Me', onSubmit, style, ...rest }) {
  return (
    <form onSubmit={onSubmit} style={{
      display: 'flex', gap: 0, maxWidth: '440px', margin: '0 auto',
      border: '2px solid rgba(255,252,245,.4)', background: 'rgba(255,252,245,.1)',
      borderRadius: 'var(--radius-pill)', overflow: 'hidden', padding: '4px 4px 4px 18px', ...style
    }} {...rest}>
      <input type="email" required placeholder={placeholder} style={{
        flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--cream)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', fontWeight: 500, minWidth: 0
      }} />
      <button type="submit" style={{
        background: 'var(--cream)', color: 'var(--flag)', border: 'none', borderRadius: 'var(--radius-pill)',
        padding: '11px 18px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-fine)', fontWeight: 700,
        letterSpacing: 'var(--ls-button)', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', flex: 'none'
      }}>{cta}</button>
    </form>
  );
}
