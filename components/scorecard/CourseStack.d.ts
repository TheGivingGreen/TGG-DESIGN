export interface Hole {
  /** Zero-padded: "01" through "09". */
  hole: string;
  venue: string;
  /** Optional right-aligned detail. Omit when pars are not published. */
  par?: string;
  href?: string;
}

/**
 * The course as nine stacked rules. The hover slide is the site's most
 * recognisable interaction.
 * @startingPoint section="Scorecard" subtitle="Nine holes as a rule-separated stack" viewport="700x400"
 */
export interface CourseStackProps {
  holes: Hole[];
  /** true on forest (the shipped treatment), false on sand. */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function CourseStack(props: CourseStackProps): JSX.Element;
