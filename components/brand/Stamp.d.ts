/** Square-cornered bordered box for the date line: "Saturday, October 3, 2026 · 1 to 6 PM · Soulard". */
export interface StampProps {
  onDark?: boolean;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Stamp(props: StampProps): JSX.Element;
export function StampDot(): JSX.Element;
