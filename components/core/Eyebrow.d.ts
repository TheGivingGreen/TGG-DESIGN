/** Section eyebrow. Always uppercase, always Bunker gold, usually numbered. */
export interface EyebrowProps {
  /** Draws the 28x2 gold rule before the text (hero treatment). */
  rule?: boolean;
  tone?: 'bunker' | 'fairway' | 'cream';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
