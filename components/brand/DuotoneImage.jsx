import React from 'react';

/**
 * All marketing photography runs through this: desaturated, then mapped
 * forest-to-sand. Renders the filter defs once per page automatically.
 */
export function DuotoneImage({ src, alt = '', ratio, scrim = false, opacity = 1, style, imgStyle, children, ...rest }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: ratio, background: 'var(--shadow-ink)', ...style }} {...rest}>
      <DuotoneDefs />
      <img src={src} alt={alt} style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        filter: 'url(#tgg-duotone)', opacity, ...imgStyle
      }} />
      {scrim ? <span style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom,rgba(20,40,34,.45) 0%,rgba(20,40,34,.10) 35%,rgba(20,40,34,.75) 100%)'
      }} /> : null}
      {children}
    </div>
  );
}

/** The SVG filter itself. DuotoneImage mounts it for you; mount it directly for CSS-background photos. */
export function DuotoneDefs() {
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        <filter id="tgg-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.118 0.961" />
            <feFuncG type="table" tableValues="0.227 0.941" />
            <feFuncB type="table" tableValues="0.196 0.910" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
