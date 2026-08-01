export interface FaqEntry { q: React.ReactNode; a: React.ReactNode }

/**
 * FAQ accordion. Hard forest rules, Flag red plus that rotates to a cross.
 * @startingPoint section="Core" subtitle="FAQ accordion with forest rules" viewport="700x320"
 */
export interface FaqListProps {
  items: FaqEntry[];
  /** Allow several answers open at once. Default is one at a time. */
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}
export function FaqList(props: FaqListProps): JSX.Element;
