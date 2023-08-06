//@ts-noCheck
import React from 'react';

import { Icon, iconPath } from '../Icon';
import { Stack } from '../Stack';
import { Box } from '../Box';

import * as S from './styles';

export type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
};

export type BreadcrumbItemProps = (
  | {
      as: 'a';
      href: string;
      target?: string;
    }
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as: any;
      href: string;
      target?: string;
    }
  | {
      as: 'button';
      onClick: () => void;
    }
) & {
  label: string;
  className?: string;
  icon?: keyof typeof iconPath;
  isActive?: boolean;
};

const Root = ({
  className,
  children,
  ...props
}: BreadcrumbProps): JSX.Element => (
  <Stack
    as="ul"
    gap="1"
    align="center"
    className={`p-0 ${className}`}
    {...props}
  >
    {children}
  </Stack>
);

Root.displayName = 'Root';

const Item = ({
  label,
  as='a',
  icon,
  className,
  href,
  onClick,
  isActive = false,
  ...props
}: BreadcrumbItemProps): JSX.Element => {
  const Component = as || React.Fragment;

  return (
    <Box
      as="li"
      className={S.bredcrumItem({ isActive, className })}
      isActive={isActive}
      {...props}
    >
      <Stack gap="1" align="center">
        <Component as={as} href={href} onClick={onClick}>
          {label}
        </Component>
        {Boolean(icon) && (
          <Icon
            name={icon || 'settings'}
            size="xs"
            label="icon"
            className="group-hover:opacity-1 translate-x-[-2px] opacity-0 transition-opacity transition-transform duration-[0.3s] ease-in-out group-hover:translate-x-[4px]"
          />
        )}
      </Stack>
    </Box>
  );
};

Item.displayName = 'Item';

export const Breadcrumb = {
  Root: Root,
  Item: Item,
};
