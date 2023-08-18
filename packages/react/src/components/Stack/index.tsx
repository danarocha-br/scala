import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

export type StackProps = Polymorphic.ForwardRefComponent<
  'div',
  { children: React.ReactNode; className?: string } & VariantProps<typeof stack>
>;

const stack = cva(['box-border', 'flex'], {
  variants: {
    direction: {
      row: ['flex-row'],
      column: ['flex-col'],
      'row-reverse': ['flex-row-reverse'],
      'column-reverse': ['flex-col-reverse'],
    },

    align: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      stretch: ['items-stretch'],
      baseline: ['items-baseline'],
    },

    justify: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
    },

    wrap: {
      'no-wrap': ['flex-nowrap'],
      wrap: ['flex-wrap'],
      'wrap-reverse': ['flex-wrap-reverse'],
    },

    gap: {
      '0': ['gap-0'],
      '1': ['gap-1'],
      '2': ['gap-2'],
      '3': ['gap-3'],
      '4': ['gap-4'],
      '5': ['gap-5'],
      '6': ['gap-6'],
      '7': ['gap-7'],
      '8': ['gap-8'],
      '9': ['gap-9'],
      '10': ['gap-10'],
      '11': ['gap-11'],
      '12': ['gap-12'],
    },

    fullWidth: {
      true: ['w-full'],
    },
  },

  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    wrap: 'no-wrap',
    gap: '2',
    fullWidth: false,
  },
});

export const Stack = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className = '',
      direction,
      align,
      justify,
      wrap,
      gap,
      fullWidth,
      ...props
    },
    ref
  ) => (
    <Component
      {...props}
      ref={ref}
      className={stack({
        direction,
        align,
        justify,
        wrap,
        gap,
        fullWidth,
        className,
      })}
    >
      {children}
    </Component>
  )
) as StackProps;
