/**
 * Sponsorship tier, as used on the partner page and in sponsorship decks.
 * The 6px accent rail is the only colour coding in the system.
 * @startingPoint section="Cards" subtitle="Sponsorship tier on forest" viewport="700x420"
 */
export interface TierCardProps {
  /** flag = top tier, bunker = middle, fairway = entry. */
  accent?: 'flag' | 'bunker' | 'fairway';
  label: string;
  price: React.ReactNode;
  /** "2 Available". Scarcity is stated plainly, never in exclamation. */
  availability?: string;
  benefits?: React.ReactNode[];
  style?: React.CSSProperties;
}
export function TierCard(props: TierCardProps): JSX.Element;
