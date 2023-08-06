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
} & React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

const Content = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <S.ContainerContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={className}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

Content.displayName = 'Content';

export const Popover = {
  Root: Root,
  Content: Content,
};
