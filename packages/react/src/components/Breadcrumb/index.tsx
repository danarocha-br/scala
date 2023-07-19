//@ts-nocheck
import React from 'react';

import { CSS } from '../../styles';
import { Icon, iconPath } from '../Icon';
import { Stack } from '../Stack';

import * as S from './styles';

export type BreadcrumbProps = {
  children: React.ReactNode;
  css?: CSS;
};

export type BreadcrumbItemProps = (
  | {
      as: 'a';
      href: string;
      target?: string;
    }
  | {
      as: React.ElementType<unknown>;
      href: string;
      target?: string;
    }
  | {
      as: 'button';
      onClick: () => void;
    }
) & {
  label: string;
  css?: CSS;
  icon?: keyof typeof iconPath;
  isActive?: boolean;
};

const Root = ({ css, children, ...props }: BreadcrumbProps): JSX.Element => (
  <Stack as="ul" gap="1" align="center" css={{ padding: 0, css }} {...props}>
    {children}
  </Stack>
);

Root.displayName = 'Root';

const Item = ({
  label,
  as,
  icon,
  css,
  href,
  onClick,
  isActive = false,
  ...props
}: BreadcrumbItemProps): JSX.Element => {
  const Component = as || React.Fragment;

  return (
    <S.Container css={css} isActive={isActive} {...props}>
      <Stack gap="1" align="center">
        <Component as={as} href={href} onClick={onClick}>
          {label}
        </Component>
        {Boolean(icon) && (
          <Icon
            name={icon || 'settings'}
            size="xs"
            label="icon"
            className="breadcrumb__item--icon"
          />
        )}
      </Stack>
    </S.Container>
  );
};

Item.displayName = 'Item';

export const Breadcrumb = {
  Root: Root,
  Item: Item,
};
