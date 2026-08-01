import * as React from 'react';

/**
 * Pill button. Flag primary is the ticket CTA and the single accent moment on
 * most viewports; ghost carries every secondary action.
 * @startingPoint section="Core" subtitle="Pill buttons, four variants" viewport="700x160"
 */
export interface ButtonProps {
  /** primary = flag red (buy a ticket). forest = solid dark. ghost = outlined on sand. ghostOnDark = outlined on forest. */
  variant?: 'primary' | 'forest' | 'ghost' | 'ghostOnDark';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> when set. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
