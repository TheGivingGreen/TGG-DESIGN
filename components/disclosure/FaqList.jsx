import React from 'react';

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '2px solid var(--forest)' }}>
      <button onClick={onToggle} aria-expanded={open} style={{
        width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', padding: '20px 4px', textAlign: 'left',
        gap: '16px', fontFamily: 'var(--font-body)'
      }}>
        <span style={{ fontSize: 'clamp(15px,1.8vw,18px)', fontWeight: 700, color: 'var(--forest)', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          fontFamily: 'var(--font-impact)', fontSize: '22px', color: 'var(--flag)', flex: 'none', lineHeight: 1,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-base)'
        }}>+</span>
      </button>
      <div style={{ maxHeight: open ? '400px' : 0, overflow: 'hidden', transition: 'max-height .35s ease, padding var(--dur-base)', paddingBottom: open ? '20px' : 0 }}>
        <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 1.7, color: 'var(--text-body)', padding: '0 4px', maxWidth: '66ch', margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

/** Accordion with 2px forest rules. The + rotates 45 degrees, it does not swap glyphs. */
export function FaqList({ items = [], allowMultiple = false, style, ...rest }) {
  const [open, setOpen] = React.useState([]);
  const toggle = (i) => setOpen((cur) =>
    cur.includes(i) ? cur.filter((x) => x !== i) : allowMultiple ? [...cur, i] : [i]);
  return (
    <div style={{ borderTop: '2px solid var(--forest)', ...style }} {...rest}>
      {items.map((it, i) => <FaqItem key={i} {...it} open={open.includes(i)} onToggle={() => toggle(i)} />)}
    </div>
  );
}
