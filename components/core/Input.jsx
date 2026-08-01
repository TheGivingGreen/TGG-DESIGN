import React from 'react';

/** Pill text field. Two skins: on sand (forest hairline) and on forest (fairway hairline). */
export function Input({ onDark = false, align = 'left', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        background: onDark ? 'var(--forest)' : 'var(--cream)',
        border: '1px solid ' + (focus ? 'var(--bunker)' : onDark ? 'var(--fairway)' : 'var(--line)'),
        color: onDark ? 'var(--cream)' : 'var(--forest)',
        borderRadius: 'var(--radius-pill)', padding: '14px 22px', textAlign: align,
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', letterSpacing: '.06em',
        outline: 'none', width: '100%', ...style
      }} {...rest} />
  );
}
