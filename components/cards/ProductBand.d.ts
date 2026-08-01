/**
 * The Pro Shop product band. Alternating sand and forest bands, product art at
 * full colour, ceremonial italic blurb.
 * @startingPoint section="Pro Shop" subtitle="Alternating product band" viewport="700x300"
 */
export interface ProductBandProps {
  image: string;
  imageAlt?: string;
  name: React.ReactNode;
  /** Playfair italic product story. Two or three sentences. */
  blurb?: React.ReactNode;
  /** Construction line: "Performance fabric, laser-perforated sides, adjustable snap closure." */
  spec?: string;
  price?: string;
  sku?: string;
  cta?: string;
  ctaHref?: string;
  /** Forest band instead of sand. Alternate every other band. */
  onDark?: boolean;
  /** Puts the art on the right. Pair with onDark for the shipped rhythm. */
  reverse?: boolean;
  style?: React.CSSProperties;
}
export function ProductBand(props: ProductBandProps): JSX.Element;
