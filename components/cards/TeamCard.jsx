import React from 'react';
import { Button } from '../core/Button.jsx';

/** Charity team card: full-colour shirt, charity logo, mission line, two actions. */
export function TeamCard({ shirt, shirtAlt, logo, charity, mission, learnHref, joinHref, joinLabel = 'Join This Team', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        border: '1.5px solid ' + (hover ? 'var(--forest)' : 'var(--line)'),
        background: 'var(--cream)', display: 'flex', gap: '16px', padding: '18px 16px',
        transition: 'border-color var(--dur-fast)', ...style
      }} {...rest}>
      <div style={{ width: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={shirt} alt={shirtAlt || charity + ' team shirt'} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', display: 'block' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
        <div style={{ height: '104px', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt={charity} style={{ maxHeight: '104px', maxWidth: 'min(240px,100%)', objectFit: 'contain', objectPosition: 'left center' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
          fontSize: 'clamp(17px,1.5vw,20px)', lineHeight: 1.15, letterSpacing: '.01em', color: 'var(--forest)' }}>{charity}</div>
        <p style={{ fontSize: 'var(--fs-caption)', lineHeight: 1.55, color: 'var(--text-body)', flex: 1, margin: 0 }}>{mission}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px',
          marginTop: '12px', flexWrap: 'wrap', rowGap: '10px' }}>
          <a href={learnHref} target="_blank" rel="noopener" style={{
            fontSize: '10.5px', fontWeight: 700, letterSpacing: '.13em', textTransform: 'uppercase',
            color: 'var(--bunker)', textDecoration: 'none', whiteSpace: 'nowrap', flex: 'none'
          }}>Learn More</a>
          <Button variant="forest" size="sm" href={joinHref} target="_blank" rel="noopener"
            style={{ fontSize: '11.5px', padding: '12px 20px' }}>{joinLabel} <span style={{ fontSize: '13px', lineHeight: 1 }}>&rarr;</span></Button>
        </div>
      </div>
    </article>
  );
}
