import React from 'react';
import { Box } from '../Box';

import * as S from './styles';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<unknown> | any;
  href: string;
  target?: string;
  color?: 'primary' | 'secondary' | 'caption';
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  as,
  href,
  target,
  color,
  children,
  className,
  ...props
}: LinkProps): JSX.Element => {
  const Component = as || React.Fragment;

  return (
    <Component href={href} target={target} role="navigation">
      <S.Anchor color={color} className={className} {...props}>
        <Box as="span">{children}</Box>
      </S.Anchor>
    </Component>
  );
};

Link.displayName = 'Link';
