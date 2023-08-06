import React from 'react';
import {
  Root,
  Trigger,
  MenuContentProps,
  Portal,
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

const DropdownItem = S.DropdownItem;
DropdownItem.displayName = 'Item';

const DropdownRightSlot = S.RightSlot;
DropdownItem.displayName = 'RightSlot';

const DropdownSeparator = S.DropdownSeparator;
DropdownItem.displayName = 'Separator';

function DropdownMenuContent({
  children,
  ...props
}: MenuContentProps): JSX.Element {
  return (
    <Portal>
      <S.DropdownMenuContent
        sideOffset={8}
        alignOffset={5}
        arrowPadding={8}
        {...props}
      >
        {children}
        <S.DropdownMenuArrow />
      </S.DropdownMenuContent>
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
  <Box
    className={`dropdown relative max-w-max z-max ${className}`}
    {...props}
  >
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
