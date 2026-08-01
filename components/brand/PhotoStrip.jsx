import React from 'react';
import { DuotoneDefs } from './DuotoneImage.jsx';

/** Edge-to-edge duotone photo grid, 3px shadow-ink gutters. Photos scale 1.04 on hover. */
export function PhotoStrip({ photos = [], columns = '1.1fr 1fr 1.1fr', height = 'clamp(400px,55vw,700px)', style, ...rest }) {
  return (
    <section style={{ background: 'var(--shadow-ink)', display: 'grid', gridTemplateColumns: columns, gap: '3px', height, ...style }} {...rest}>
      <DuotoneDefs />
      {photos.map((p, i) => <StripFigure key={i} {...p} />)}
    </section>
  );
}

function StripFigure({ src, alt }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ margin: 0, position: 'relative', overflow: 'hidden', height: '100%' }}>
      <img src={src} alt={alt || ''} style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        filter: 'url(#tgg-duotone)', transition: 'transform .4s ease',
        transform: hover ? 'scale(1.04)' : 'none'
      }} />
    </figure>
  );
}
