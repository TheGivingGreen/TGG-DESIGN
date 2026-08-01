import React from 'react';
import { Button } from '../core/Button.jsx';
import { Ceremonial } from '../core/Ceremonial.jsx';

/** Full-bleed 50/50 product band. Pro Shop layout: full-colour product art, copy beside it. */
export function ProductBand({ image, imageAlt, name, blurb, spec, price, sku, cta = 'Shop Now', ctaHref, onDark = false, reverse = false, style, ...rest }) {
  const label = {
    fontSize: 'var(--fs-label)', fontWeight: 700, letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase', color: onDark ? 'var(--bunker)' : 'var(--fairway)'
  };
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch',
      background: onDark ? 'var(--forest)' : 'var(--sand)',
      borderTop: '1px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'), ...style
    }} {...rest}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,2.5vw,32px)',
        background: onDark ? '#16302A' : 'var(--sand-deep)', order: reverse ? 2 : 1
      }}>
        <img src={image} alt={imageAlt || name} style={{ width: '92%', maxWidth: '560px', height: 'auto', display: 'block',
          filter: 'drop-shadow(0 14px 22px rgba(20,40,34,.18))' }} />
      </div>
      <div style={{ padding: 'var(--band-pad)', display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center', order: reverse ? 1 : 2 }}>
        <h2 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
          fontSize: 'clamp(32px,4.4vw,56px)', lineHeight: .92, margin: 0,
          color: onDark ? 'var(--cream)' : 'var(--forest)' }}>{name}</h2>
        {blurb ? <Ceremonial as="p" tone={onDark ? 'cream' : 'forest'} style={{ fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.55, maxWidth: '42ch' }}>{blurb}</Ceremonial> : null}
        {spec ? <span style={label}>{spec}</span> : null}
        {price ? <span style={{ fontWeight: 700, color: onDark ? 'var(--cream)' : 'var(--forest)' }}>{price}</span> : null}
        {sku ? <span style={label}>{sku}</span> : null}
        {ctaHref ? <Button variant={onDark ? 'ghostOnDark' : 'ghost'} href={ctaHref} target="_blank" rel="noopener" style={{ alignSelf: 'flex-start', marginTop: '6px' }}>{cta}</Button> : null}
      </div>
    </section>
  );
}
