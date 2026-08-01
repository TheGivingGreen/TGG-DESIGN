/**
 * Uppercase label chip: "2 Available", "Merch · Fore Good", "Coming Soon".
 */
export interface BadgeProps {
  tone?: 'flag' | 'forest' | 'sand' | 'bunker';
  /** square for card badges, pill when floating in a strip of copy. */
  shape?: 'square' | 'pill';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
