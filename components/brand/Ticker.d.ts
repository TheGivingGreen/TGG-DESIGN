/**
 * The Flag red marquee that separates the hero from the course.
 * @startingPoint section="Brand" subtitle="Flag red Anton marquee" viewport="700x60"
 */
export interface TickerProps {
  /** Short uppercase phrases. Repeat the list until it fills at least two screen widths. */
  items?: string[];
  /** Seconds per loop. 32 is the shipped speed. */
  speed?: number;
  style?: React.CSSProperties;
}
export function Ticker(props: TickerProps): JSX.Element;
