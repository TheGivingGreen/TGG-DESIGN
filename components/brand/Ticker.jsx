import React from 'react';

/** Flag red marquee. Anton, uppercase, gold dots between phrases. Pauses on hover. */
export function Ticker({ items = [], speed = 32, style, ...rest }) {
  const run = items.flatMap((t, i) => [
    <span key={'t' + i}>{t}</span>,
    <span key={'d' + i} style={{ width: '5px', height: '5px', background: 'rgba(255,252,245,.5)', borderRadius: '50%', flex: 'none' }} />
  ]);
  const track = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '28px', padding: '0 28px',
      fontFamily: 'var(--font-impact)', fontSize: '14px', textTransform: 'uppercase',
      color: 'var(--cream)', letterSpacing: '.08em', whiteSpace: 'nowrap' }}>{run}</span>
  );
  return (
    <div style={{ background: 'var(--flag)', overflow: 'hidden', padding: '11px 0', whiteSpace: 'nowrap', ...style }} {...rest}>
      <style>{'@keyframes tgg-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}'}</style>
      <div style={{ display: 'inline-flex', animation: 'tgg-ticker ' + speed + 's linear infinite' }}>
        {track}{track}
      </div>
    </div>
  );
}
