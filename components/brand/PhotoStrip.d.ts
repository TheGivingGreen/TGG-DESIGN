/**
 * The full-bleed photo strip that breaks up long pages. Duotone, 3px gutters,
 * no captions, no overlay type.
 * @startingPoint section="Brand" subtitle="Full-bleed duotone photo strip" viewport="700x260"
 */
export interface PhotoStripProps {
  photos: { src: string; alt?: string }[];
  /** Uneven columns read better than equal ones. Default "1.1fr 1fr 1.1fr". */
  columns?: string;
  height?: string;
  style?: React.CSSProperties;
}
export function PhotoStrip(props: PhotoStripProps): JSX.Element;
