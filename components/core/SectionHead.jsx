import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';
import { Ceremonial } from './Ceremonial.jsx';

/** Eyebrow + Anton headline + optional Playfair subline. The standard section opener. */
export function SectionHead({ eyebrow, title, subline, align = 'left', onDark = false, size = 'display', style, ...rest }) {
  return (
    <header style={{ textAlign: align, marginBottom: 'var(--space-9)', ...style }} {...rest}>
      {eyebrow ? <Eyebrow tone={onDark ? 'bunker' : 'bunker'} style={{ justifyContent: align === 'center' ? 'center' : 'flex-start', marginBottom: '10px' }}>{eyebrow}</Eyebrow> : null}
      <h2 style={{
        fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
        fontSize: size === 'display' ? 'var(--fs-display)' : 'var(--fs-h2)',
        lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--type-impact-tracking)',
        color: onDark ? 'var(--cream)' : 'var(--forest)', margin: '0 0 8px'
      }}>{title}</h2>
      {subline ? <Ceremonial tone={onDark ? 'bunker' : 'fairway'} style={{ marginTop: '12px' }}>{subline}</Ceremonial> : null}
    </header>
  );
}
