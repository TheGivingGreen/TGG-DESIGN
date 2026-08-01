import React from 'react';

function HoleRow({ hole, venue, par, href, onDark }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none',
        color: onDark ? 'var(--cream)' : 'var(--forest)',
        borderBottom: '2px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'),
        padding: '16px 6px',
        transition: 'transform var(--dur-stack) var(--ease-standard), background var(--dur-base)',
        transform: hover ? 'translateX(var(--stack-slide))' : 'none',
        background: hover ? (onDark ? 'rgba(255,252,245,.04)' : 'rgba(30,58,50,.03)') : 'transparent'
      }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', fontWeight: 700, width: '32px', flex: 'none',
        color: hover ? 'var(--flag)' : 'var(--bunker)', transition: 'color var(--dur-fast)'
      }}>{hole}</span>
      <span style={{
        fontFamily: 'var(--font-impact)', textTransform: 'uppercase', fontSize: 'var(--fs-venue)',
        lineHeight: 1.04, letterSpacing: '.01em'
      }}>{venue}</span>
      {par ? <span style={{
        marginLeft: 'auto', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-fine)', fontWeight: 700,
        letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--bunker)', flex: 'none'
      }}>{par}</span> : null}
    </a>
  );
}

/** The nine holes as a rule-separated stack. Rows slide right on hover, hole number turns Flag red. */
export function CourseStack({ holes = [], onDark = true, style, ...rest }) {
  return (
    <div style={{ borderTop: '2px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'), ...style }} {...rest}>
      {holes.map((h, i) => <HoleRow key={i} onDark={onDark} {...h} />)}
    </div>
  );
}
