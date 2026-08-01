import React from 'react';
import { Mark } from '../brand/Mark.jsx';
import { Button } from '../core/Button.jsx';

/** Fixed site nav. Transparent over the hero, sand with a 2px forest rule once scrolled. */
export function NavBar({ links = [], cta = 'Get Tickets', ctaHref, scrolled = false, base = '', activeHref, style, ...rest }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, left: 0, right: 0, zIndex: 150, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '20px clamp(20px,4vw,48px)',
      background: scrolled ? 'var(--sand)' : 'transparent',
      borderBottom: scrolled ? '2px solid var(--forest)' : '2px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
      transition: 'background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)', ...style
    }} {...rest}>
      <Mark variant={scrolled ? 'full' : 'cream'} size={44} base={base} withWordmark onDark={!scrolled} />
      <div style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
        {links.map((l) => <NavLink key={l.href} {...l} scrolled={scrolled} active={l.href === activeHref} />)}
        <Button variant={scrolled ? 'ghost' : 'ghostOnDark'} href={ctaHref} target="_blank" rel="noopener">{cta}</Button>
      </div>
    </nav>
  );
}

function NavLink({ label, href, soon, scrolled, active }) {
  const [hover, setHover] = React.useState(false);
  const color = scrolled ? 'var(--forest)' : 'var(--cream)';
  if (soon) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color, opacity: .62, cursor: 'default',
        fontSize: 'var(--fs-label)', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>
        {label}
        <em style={{ fontStyle: 'normal', fontSize: '8px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
          background: 'var(--bunker)', color: 'var(--forest)', padding: '2px 6px', borderRadius: 'var(--radius-pill)', lineHeight: 1 }}>Soon</em>
      </span>
    );
  }
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ color, textDecoration: 'none', fontSize: 'var(--fs-label)', fontWeight: 700, letterSpacing: '.12em',
        textTransform: 'uppercase', position: 'relative', paddingBottom: '3px', display: 'inline-block' }}>
      {label}
      <span style={{ position: 'absolute', left: 0, bottom: 0, height: '2px', background: 'var(--flag)',
        width: hover || active ? '100%' : 0, transition: 'width var(--dur-fast)' }} />
    </a>
  );
}
