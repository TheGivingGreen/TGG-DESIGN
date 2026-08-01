/** Fused input + submit pill. Designed to sit on the Flag red capture band. */
export interface EmailFormProps {
  placeholder?: string;
  cta?: string;
  onSubmit?: React.FormEventHandler;
  style?: React.CSSProperties;
}
export function EmailForm(props: EmailFormProps): JSX.Element;
