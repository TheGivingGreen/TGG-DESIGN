import React from 'react';

function pad(n) { return String(n).padStart(2, '0'); }

/** Bordered countdown to tee time. Anton numerals, tabular, gold labels. */
export function Countdown({ target, label = 'The Main Event Starts In', liveMessage = 'The Main Event is live. See you in Soulard.', style, ...rest }) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = new Date(target).getTime() - now;
  const live = diff <= 0;
  const s = Math.max(0, Math.floor(diff / 1000));
  const units = [
    [Math.floor(s / 86400), 'Days'],
    [Math.floor((s % 86400) / 3600), 'Hours'],
    [Math.floor((s % 3600) / 60), 'Minutes'],
    [s % 60, 'Seconds']
  ];
  return (
    <div role="timer" style={{
      border: '2px solid var(--forest)', background: 'var(--sand)', padding: '22px clamp(16px,3vw,32px)',
      textAlign: 'center', maxWidth: '720px', margin: '0 auto', ...style
    }} {...rest}>
      {live ? (
        <p style={{ fontFamily: 'var(--font-ceremonial)', fontStyle: 'italic', fontWeight: 600,
          fontSize: 'var(--fs-ceremonial)', color: 'var(--forest)', margin: 0 }}>{liveMessage}</p>
      ) : (
        <>
          <p style={{ fontSize: 'var(--fs-fine)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase', color: 'var(--fairway)', margin: '0 0 12px' }}>{label}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(14px,4vw,40px)' }}>
            {units.map(([n, l]) => (
              <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '52px' }}>
                <span style={{ fontFamily: 'var(--font-impact)', fontSize: 'clamp(32px,6vw,56px)', lineHeight: 1,
                  color: 'var(--forest)', fontVariantNumeric: 'tabular-nums' }}>{pad(n)}</span>
                <span style={{ fontSize: 'var(--fs-label-sm)', fontWeight: 700, letterSpacing: 'var(--ls-label)',
                  textTransform: 'uppercase', color: 'var(--bunker)', marginTop: '6px' }}>{l}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
