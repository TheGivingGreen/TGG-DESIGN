export interface NavItem { label: string; href: string; /** Renders a gold "Soon" chip and disables the link. */ soon?: boolean }

/**
 * Site navigation. Transparent over the hero, then sand with a 2px forest rule.
 * The underline that grows on hover is Flag red and 2px.
 * @startingPoint section="Marketing Site" subtitle="Fixed nav, transparent and scrolled" viewport="700x90"
 */
export interface NavBarProps {
  links?: NavItem[];
  cta?: string;
  ctaHref?: string;
  /** Pass the scrolled state in; the component does not listen to scroll itself. */
  scrolled?: boolean;
  /** Path prefix back to the design-system root, for the mark. */
  base?: string;
  activeHref?: string;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
