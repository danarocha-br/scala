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
/**
 * Render a dropdown item component.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the item.
 * @return {React.ReactElement} The rendered dropdown item component.
 */
const DropdownItem = ({ children, ...props }: DropdownItemProps) => (
  <Item className={S.dropdownItem()} {...props}>
    {children}
  </Item>
);
DropdownItem.displayName = 'Item';

export type DropdownRightSlotProps = {
  children: React.ReactNode;
};

/**
 * Renders the right slot component of the Dropdown.
 *
 * @param {DropdownRightSlotProps} children - The content to be rendered inside the right slot.
 * @return {JSX.Element} The rendered right slot component.
 */
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

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ align, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={8}
      alignOffset={5}
      arrowPadding={8}
      align={align}
      className={S.dropdownMenuContent()}
      {...props}
    />
  </Portal>
));

/**
 * Render a base dropdown component.
 *
 * @param {ReactNode} children - The content of the dropdown component.
 * @param {ReactNode} trigger - The trigger element for the dropdown component.
 * @param {boolean} open - Whether the dropdown is open or not.
 * @param {boolean} defaultOpen - Whether the dropdown is open by default or not.
 * @param {function} onOpenChange - The callback function when the dropdown open state changes.
 * @param {string} align - The alignment of the dropdown component.
 * @return {ReactElement} The rendered dropdown component.
 */
const DropdownBase = ({
  className = '',
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
