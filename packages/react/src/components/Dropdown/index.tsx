import React from 'react';
import {
  Root,
  Trigger,
  MenuContentProps,
  Portal,
  Content,
  Item,
  DropdownMenuItemProps,
  Separator,
  DropdownMenuSeparatorProps,
  Arrow,
} from '@radix-ui/react-dropdown-menu';

import { Box } from '../Box';
import * as S from './styles';

export type DropdownProps = {
  /** the element that will be wrapped by dropdown */
  trigger: React.ReactNode;
  /** list of items to be rendered as a link or as a button */
  children: React.ReactNode;
  /** to be used when you need to control the open state */
  open?: boolean;
  /** the open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen?: boolean;
  /** event handler called when the open state of the dropdown menu changes. */
  onOpenChange?: (open: boolean) => void;
  align?: 'center' | 'end' | 'start';
  className?: string;
};

export type DropdownItemProps = DropdownMenuItemProps &
  React.RefAttributes<HTMLDivElement>;
const DropdownItem = ({ children, ...props }: DropdownItemProps) => (
  <Item className={S.dropdownItem()} {...props}>
    {children}
  </Item>
);
DropdownItem.displayName = 'Item';

export type DropdownRightSlotProps = {
  children: React.ReactNode;
};

const DropdownRightSlot = ({ children }: DropdownRightSlotProps) => (
  <Box className={S.rightSlot()}>{children}</Box>
);
DropdownItem.displayName = 'RightSlot';

export type DropdownSeparatorProps = DropdownMenuSeparatorProps &
  React.RefAttributes<HTMLDivElement>;

const DropdownSeparator = ({ ...props }: DropdownMenuSeparatorProps) => (
  <Separator className={S.dropdownSeparator()} {...props} />
);
DropdownItem.displayName = 'Separator';

function DropdownMenuContent({
  children,
  ...props
}: MenuContentProps): JSX.Element {
  return (
    <Portal>
      <Content sideOffset={8} alignOffset={5} arrowPadding={8} {...props}>
        {children}
        <Arrow className={S.dropdownMenuArrow()} />
      </Content>
    </Portal>
  );
}

const DropdownBase = ({
  className,
  children,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  align = 'center',
  ...props
}: DropdownProps) => (
  <Box className={`dropdown relative z-max max-w-max ${className}`} {...props}>
    <Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <>
        <Trigger asChild className="dropdown__trigger">
          <div>{trigger}</div>
        </Trigger>

        <DropdownMenuContent align={align}>{children}</DropdownMenuContent>
      </>
    </Root>
  </Box>
);
DropdownBase.displayName = 'Menu';

export const Dropdown = {
  Menu: DropdownBase,
  Item: DropdownItem,
  RightSlot: DropdownRightSlot,
  Separator: DropdownSeparator,
};
