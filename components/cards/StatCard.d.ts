/** Year One proof point. Lives on forest or shadow-ink only. */
export interface StatCardProps {
  /** "$20,634", "1.5M+", "100%". */
  value: React.ReactNode;
  /** Lowercase sentence fragment: "raised for our nine charity partners". */
  label: React.ReactNode;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
export function StatGrid(props: { children?: React.ReactNode; style?: React.CSSProperties }): JSX.Element;
