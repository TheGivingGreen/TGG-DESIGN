/**
 * The section opener used on every page: gold eyebrow, Anton headline, Playfair subline.
 * @startingPoint section="Core" subtitle="Eyebrow, Anton headline, Playfair subline" viewport="700x260"
 */
export interface SectionHeadProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Ceremonial italic line. Optional, and never more than one sentence. */
  subline?: React.ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  size?: 'display' | 'h2';
  style?: React.CSSProperties;
}
export function SectionHead(props: SectionHeadProps): JSX.Element;
