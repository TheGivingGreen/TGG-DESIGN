/**
 * Forest-over-sand duotone photography. The only photographic treatment in
 * marketing surfaces. Full colour is reserved for the Pro Shop.
 * @startingPoint section="Brand" subtitle="Forest-over-sand duotone photography" viewport="700x300"
 */
export interface DuotoneImageProps {
  src: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "16/10". */
  ratio?: string;
  /** Adds the standard top-and-bottom forest scrim for text over photography. */
  scrim?: boolean;
  /** 1 for editorial photos, .40 to .55 behind headline type. */
  opacity?: number;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
export function DuotoneImage(props: DuotoneImageProps): JSX.Element;
export function DuotoneDefs(): JSX.Element;
