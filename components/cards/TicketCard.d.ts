/**
 * Ticket tier. Price is the only Flag red thing in the card, so keep the CTA ghost
 * unless this is the one tier you are pushing.
 * @startingPoint section="Cards" subtitle="Ticket tier with price and includes" viewport="700x400"
 */
export interface TicketCardProps {
  badge?: string;
  badgeTone?: 'flag' | 'forest' | 'sand' | 'bunker';
  name: React.ReactNode;
  /** "$45" */
  price: React.ReactNode;
  /** Suffix in DM Sans, e.g. "per player". */
  priceNote?: string;
  /** Gold-dotted list. Four to six items reads best. */
  includes?: React.ReactNode[];
  cta?: string;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'forest' | 'ghost';
  /** 2px forest border instead of the hairline. */
  featured?: boolean;
  style?: React.CSSProperties;
}
export function TicketCard(props: TicketCardProps): JSX.Element;
