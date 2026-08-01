import React from 'react';

const SIZES = {
  sm: { padding: '10px 18px', fontSize: '12px' },
  md: { padding: '12px 26px', fontSize: '13px' },
  lg: { padding: '15px 34px', fontSize: '14px' }
};

const VARIANTS = {
  primary: { background: 'var(--flag)', color: 'var(--cream)', borderColor: 'var(--flag)' },
  forest:  { background: 'var(--forest)', color: 'var(--cream)', borderColor: 'var(--forest)' },
  ghost:   { background: 'transparent', color: 'var(--forest)', borderColor: 'var(--forest)' },
  ghostOnDark: { background: 'transparent', color: 'var(--cream)', borderColor: 'var(--cream)' }
};

const HOVERS = {
  primary: { background: 'var(--flag-deep)', borderColor: 'var(--flag-deep)' },
  forest:  { background: 'var(--fairway)', borderColor: 'var(--fairway)' },
  ghost:   { background: 'var(--forest)', color: 'var(--cream)' },
  ghostOnDark: { background: 'var(--cream)', color: 'var(--forest)' }
};

/** The one round thing in the system. Pill radius, uppercase, 700, .1em tracking. */
export function Button({ variant = 'primary', size = 'md', href, as, children, style, onClick, disabled, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center',
    borderRadius: 'var(--radius-pill)', border: '2px solid transparent',
    fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase', textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap', lineHeight: 1,
    transition: 'background var(--dur-fast), color var(--dur-fast), transform .15s, border-color var(--dur-fast)',
    opacity: disabled ? 0.4 : 1,
    ...SIZES[size], ...VARIANTS[variant],
    ...(hover && !disabled ? { ...HOVERS[variant], transform: 'translateY(var(--hover-lift))' } : null),
    ...style
  };
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      style={base} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}
