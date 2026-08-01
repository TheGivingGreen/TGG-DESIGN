/** Full-bleed statement band. Flag red is the loudest thing the brand does. */
export interface AccentBandProps {
  tone?: 'flag' | 'forest';
  align?: 'left' | 'center';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function AccentBand(props: AccentBandProps): JSX.Element;
