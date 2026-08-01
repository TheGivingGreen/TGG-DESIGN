/** Pill text field. Focus ring is a Bunker gold hairline, never a glow. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onDark?: boolean;
  align?: 'left' | 'center';
}
export function Input(props: InputProps): JSX.Element;
