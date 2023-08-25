import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import * as S from './styles';

export type PopoverProps = {
  className?: string;
  trigger: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

const Root = ({ children, trigger, ...props }: PopoverProps) => {
  return (
    <PopoverPrimitive.Root {...props}>
      <PopoverPrimitive.Trigger asChild>
        <div>{trigger}</div>
      </PopoverPrimitive.Trigger>
      {children}
    </PopoverPrimitive.Root>
  );
};

export type PopoverContentProps = {
  className?: string;
  unstyled?: boolean;
} & React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

const Content = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className = '',
      align = 'center',
      sideOffset = 4,
      unstyled = false,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal className="w-full">
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={S.ContainerContent({ unstyled, className })}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);

Content.displayName = 'Content';

export const Popover = {
  Root: Root,
  Content: Content,
};
