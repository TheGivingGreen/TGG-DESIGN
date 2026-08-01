/** Countdown to tee time. Square border, Anton numerals, Bunker labels. */
export interface CountdownProps {
  /** ISO date string, e.g. "2026-10-03T13:00:00-05:00". */
  target: string;
  label?: string;
  /** Shown in Playfair italic once the target passes. */
  liveMessage?: string;
  style?: React.CSSProperties;
}
export function Countdown(props: CountdownProps): JSX.Element;
