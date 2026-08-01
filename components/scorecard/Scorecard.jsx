import React from 'react';

const SCORE_COLOR = { good: 'var(--fairway)', best: 'var(--flag)', penalty: 'var(--bunker)', neutral: 'var(--forest)' };

/**
 * The signature component. A cream card with a 2px forest border, a forest
 * header rail, hairline rows and Anton stroke figures on the right.
 */
export function Scorecard({ rows = [], header = ['Activity', 'Strokes'], footer, style, ...rest }) {
  return (
    <div style={{ background: 'var(--cream)', border: '2px solid var(--forest)', width: '100%', ...style }} {...rest}>
      {header ? (
        <div style={{
          background: 'var(--forest)', color: 'var(--cream)', display: 'flex', justifyContent: 'space-between',
          padding: '13px 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-fine)', fontWeight: 700,
          letterSpacing: 'var(--ls-label)', textTransform: 'uppercase'
        }}>
          <span>{header[0]}</span><span>{header[1]}</span>
        </div>
      ) : null}
      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px',
          padding: '14px 20px', fontSize: '16px', color: 'var(--text-body)',
          borderBottom: i === rows.length - 1 && !footer ? 'none' : '1px solid var(--line)'
        }}>
          <span>{r.label}{r.note ? <em style={{ color: 'var(--fairway)' }}> ({r.note})</em> : null}</span>
          <span style={{
            fontFamily: 'var(--font-impact)', fontSize: '26px', minWidth: '60px', textAlign: 'right',
            color: SCORE_COLOR[r.tone || 'neutral'], lineHeight: 1
          }}>{r.strokes}</span>
        </div>
      ))}
      {footer ? (
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px',
          background: 'var(--forest)', color: 'var(--cream)', fontWeight: 700
        }}>
          <span>{footer.label}</span>
          <span style={{ fontFamily: 'var(--font-impact)', fontSize: '26px', color: 'var(--flag)', lineHeight: 1 }}>{footer.strokes}</span>
        </div>
      ) : null}
    </div>
  );
}
