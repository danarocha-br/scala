import React from 'react';
import { CSS } from '../../styles';
import { Box } from '../Box';

import * as S from './styles';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<unknown> | any;
  href: string;
  target?: string;
  color?: 'primary' | 'secondary' | 'caption';
  css?: CSS;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  as,
  href,
  target,
  color,
  children,
  css,
  ...props
}: LinkProps): JSX.Element => {
  const Component = as || React.Fragment;

  return (
    <Component href={href}>
      <S.Anchor
        href={href}
        target={target}
        color={color}
        role="navigation"
        css={css}
        {...props}
      >
        <Box as="span">{children}</Box>
      </S.Anchor>
    </Component>
  );
};

Link.displayName = 'Link';
