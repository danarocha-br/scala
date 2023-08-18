import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

export type BoxProps = Polymorphic.ForwardRefComponent<
  'div',
  { children?: React.ReactNode; className?: string } & VariantProps<typeof box>
>;

export const box = cva(['box-border']);

export const Box = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className='',
      ...props
    },
    forwardedRef
  ) => (
    <Component
      {...props}
      ref={forwardedRef}
      className={box({
        className,
      })}
    >
      {children}
    </Component>
  )
) as BoxProps;
