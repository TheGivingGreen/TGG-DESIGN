export interface ScorecardRow {
  label: React.ReactNode;
  /** Parenthetical aside, rendered in Fairway italic: "mocktails count too". */
  note?: string;
  /** "-2", "+0", "+2". Written with the sign, always. */
  strokes: React.ReactNode;
  /** good = strokes off. best = the sponsored drink, the best move on the card. penalty = strokes on. */
  tone?: 'good' | 'best' | 'penalty' | 'neutral';
}

/**
 * The scorecard. The signature component of the brand: golf language delivered
 * with a straight face, in a cream card with hard forest rules.
 * @startingPoint section="Scorecard" subtitle="Stroke table, the signature component" viewport="700x330"
 */
export interface ScorecardProps {
  rows: ScorecardRow[];
  /** Column labels, or null for a headerless card. */
  header?: [string, string] | null;
  /** Inverted summary row at the bottom. */
  footer?: { label: React.ReactNode; strokes: React.ReactNode };
  style?: React.CSSProperties;
}
export function Scorecard(props: ScorecardProps): JSX.Element;
