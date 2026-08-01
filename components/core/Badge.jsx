import React from 'react';

const BADGE_TONES = {
  flag:   { background: 'var(--flag)', color: 'var(--cream)' },
  forest: { background: 'var(--forest)', color: 'var(--cream)' },
  sand:   { background: 'var(--sand-deep)', color: 'var(--bunker)' },
  bunker: { background: 'var(--bunker)', color: 'var(--forest)' }
};

/** Small uppercase label chip. Square by default, pill when it sits in running text. */
export function Badge({ tone = 'flag', shape = 'square', children, style, ...rest }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700,
      letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', lineHeight: 1,
      padding: shape === 'pill' ? '5px 12px' : '4px 10px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-none)',
      ...BADGE_TONES[tone], ...style
    }} {...rest}>{children}</span>
  );
}
