import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { Box } from '../Box';
import * as S from './styles';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<unknown> | any;
  href: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof S.anchor>;

/**
 * Renders a link element with customizable properties.
 *
 * @param {string} props.as - The HTML element to render as the link (default: 'a').
 * @param {string} props.href - The URL for the link.
 * @param {string} props.target - The target attribute for the link.
 * @param {string} props.color - The color of the link (default: 'primary').
 * @param {ReactNode} props.children - The content of the link.
 * @return {JSX.Element} The rendered link element.
 */
export const Link = ({
  as,
  href,
  target,
  color = 'primary',
  children,
  className = '',
  ...props
}: LinkProps): JSX.Element => {
  const Component = as || 'a';

  return (
    <Component
      href={href}
      target={target}
      role="navigation"
      className={S.container()}
    >
      <Box as="span" className={S.anchor({ color, className })} {...props}>
        <Box as="span" className={S.label()}>
          {children}
        </Box>
      </Box>
    </Component>
  );
};

Link.displayName = 'Link';
