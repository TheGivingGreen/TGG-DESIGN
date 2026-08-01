import React from 'react';

const CEREMONIAL_TONES = { fairway: 'var(--fairway)', bunker: 'var(--bunker)', forest: 'var(--forest)', cream: 'var(--sand)' };

/** Playfair Display 600 italic. Ceremonial taglines only, never body copy. */
export function Ceremonial({ tone = 'bunker', size = 'md', as = 'span', children, style, ...rest }) {
  const Tag = as;
  return (
    <Tag style={{
      display: 'block', fontFamily: 'var(--font-ceremonial)', fontStyle: 'italic', fontWeight: 600,
      fontSize: size === 'lg' ? 'var(--fs-ceremonial-lg)' : size === 'sm' ? 'var(--fs-ceremonial-sm)' : 'var(--fs-ceremonial)',
      lineHeight: 1.4, color: CEREMONIAL_TONES[tone], ...style
    }} {...rest}>{children}</Tag>
  );
}
