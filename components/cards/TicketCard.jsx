import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';

/** Ticket tier card: badge, Anton name, Flag red price, bulleted includes, CTA at the bottom. */
export function TicketCard({ badge, badgeTone = 'sand', name, price, priceNote, includes = [], cta, ctaHref, ctaVariant = 'ghost', featured = false, style, ...rest }) {
  return (
    <article style={{
      border: featured ? '2px solid var(--forest)' : '1.5px solid var(--line)',
      padding: '28px 22px', background: 'var(--cream)', display: 'flex', flexDirection: 'column', gap: '10px', ...style
    }} {...rest}>
      {badge ? <Badge tone={badgeTone} style={{ alignSelf: 'flex-start' }}>{badge}</Badge> : null}
      <div style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
        fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.05, color: 'var(--forest)' }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-impact)', fontSize: 'clamp(28px,3.5vw,44px)', color: 'var(--flag)', lineHeight: 1 }}>
        {price}{priceNote ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--bunker)', fontWeight: 400 }}> {priceNote}</span> : null}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: '4px 0 0', padding: 0 }}>
        {includes.map((it, i) => (
          <li key={i} style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-body)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5 }}>
            <span style={{ display: 'block', width: '5px', height: '5px', background: 'var(--bunker)', borderRadius: '50%', flex: 'none', marginTop: '7px' }} />
            {it}
          </li>
        ))}
      </ul>
      {cta ? <Button variant={ctaVariant} href={ctaHref} style={{ marginTop: 'auto', width: '100%' }}>{cta}</Button> : null}
    </article>
  );
}
