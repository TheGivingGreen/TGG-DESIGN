/**
 * One of the nine charity teams. Shirt colour designates the team, so the
 * shirt photograph stays full colour even on marketing pages.
 * @startingPoint section="Cards" subtitle="Charity team card with shirt and mission" viewport="700x300"
 */
export interface TeamCardProps {
  /** Full-colour shirt PNG on transparent background. */
  shirt: string;
  shirtAlt?: string;
  /** The charity's own logo, used as supplied. */
  logo: string;
  charity: string;
  /** One sentence, present tense, about what the charity does. */
  mission: string;
  learnHref?: string;
  joinHref?: string;
  joinLabel?: string;
  style?: React.CSSProperties;
}
export function TeamCard(props: TeamCardProps): JSX.Element;
