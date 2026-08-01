/** Playfair Display 600 italic. Taglines, pull quotes, captions. Never body copy, never UI. */
export interface CeremonialProps {
  tone?: 'fairway' | 'bunker' | 'forest' | 'cream';
  size?: 'sm' | 'md' | 'lg';
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Ceremonial(props: CeremonialProps): JSX.Element;
