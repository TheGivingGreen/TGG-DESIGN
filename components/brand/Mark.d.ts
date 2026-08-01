/**
 * The heart-flag mark, from the supplied artwork. Its outline is #324E35, a
 * logo-only green that is never a text or UI colour.
 */
export interface MarkProps {
  /** full = 4-colour. cream = cream outline for forest backgrounds. lockup = the "Fore Good." arc lockup (PNG). No single-colour variant exists; none was supplied. */
  variant?: 'full' | 'cream' | 'lockup';
  /** Rendered width in px. */
  size?: number;
  /** Path prefix to the design-system root, e.g. "../.." from a nested page. */
  base?: string;
  /** Pairs the mark with the Playfair wordmark, as in the site nav. */
  withWordmark?: boolean;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function Mark(props: MarkProps): JSX.Element;
