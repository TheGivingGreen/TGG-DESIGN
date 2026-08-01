/**
 * Site footer. The Anton creed at the top is the largest type on the page after
 * the hero. "Fore Good." closes it, bottom right, in Playfair italic.
 * @startingPoint section="Marketing Site" subtitle="Shadow-ink footer with Anton creed" viewport="700x420"
 */
export interface SiteFooterProps {
  /** Giant Anton line. Usually the brand name. */
  creed?: React.ReactNode;
  /** Playfair italic line under the creed. */
  ceremonial?: string;
  /** Link columns, rendered right of the brand block. */
  columns?: { label: string; href: string }[][];
  fineLeft?: React.ReactNode;
  /** Bottom-right ceremonial sign-off. Marketing surfaces only. */
  tagline?: string;
  base?: string;
  style?: React.CSSProperties;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
