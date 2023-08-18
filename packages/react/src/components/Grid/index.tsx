import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

export type GridProps = Polymorphic.ForwardRefComponent<
  'div',
  { children: React.ReactNode; className?: string } & VariantProps<typeof grid>
>;

export const grid = cva(['box-border', 'grid'], {
  variants: {
    flow: {
      row: ['grid-flow-row'],
      column: ['grid-flow-col'],
      'row-dense': ['grid-flow-row-dense'],
      'col-dense': ['grid-flow-col-dense'],
    },

    cols: {
      '1': ['grid-cols-1'],
      '2': ['grid-cols-2'],
      '3': ['grid-cols-3'],
      '4': ['grid-cols-4'],
      '5': ['grid-cols-5'],
      '6': ['grid-cols-6'],
      '7': ['grid-cols-7'],
      '8': ['grid-cols-8'],
      '9': ['grid-cols-9'],
      '10': ['grid-cols-10'],
      '11': ['grid-cols-11'],
      '12': ['grid-cols-12'],
      none: ['grid-cols-none'],
    },

    rows: {
      '1': ['grid-rows-1'],
      '2': ['grid-rows-2'],
      '3': ['grid-rows-3'],
      '4': ['grid-rows-4'],
      '5': ['grid-rows-5'],
      '6': ['grid-rows-6'],
      '7': ['grid-rows-7'],
      '8': ['grid-rows-8'],
      '9': ['grid-rows-9'],
      '10': ['grid-rows-10'],
      '11': ['grid-rows-11'],
      '12': ['grid-rows-12'],
      none: ['grid-rows-none'],
    },

    gap: {
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

    align: {
      stretch: ['items-stretch'],
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      baseline: ['items-baseline'],
    },
    justify: {
      start: ['justify-start'],
      center: ['justify-center'],
      end: ['justify-end'],
      between: ['justify-between'],
    },
  },

  defaultVariants: {
    flow: 'row',
    cols: '1',
    rows: '1',
    gap: '2',
    align: 'stretch',
    justify: 'between',
  },
});

export const Grid = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      align,
      justify,
      gap,
      flow,
      cols,
      rows,
      ...props
    },
    ref
  ) => (
    <Component
      {...props}
      ref={ref}
      className={grid({
        align,
        justify,
        gap,
        flow,
        cols,
        rows,
        className,
      })}
    >
      {children}
    </Component>
  )
) as GridProps;
