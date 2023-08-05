import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'font-sans',
    'uppercase',
    'inline-flex',
    'items-center',
    'align-middle',
    'overflow-hidden',
    'select-none',
  ],
  {
    variants: {
      variant: {
        circle: ['rounded-circle'],
        square: ['rounded-sm'],
      },

      size: {
        sm: ['text-xxs', 'w-[20px]', 'h-[20px]'],
        md: ['text-xs', 'w-4', 'h-4'],
        lg: ['text-md', 'w-6', 'h-6'],
      },
    },

    defaultVariants: {
      variant: 'circle',
      size: 'md',
    },
  }
);

export const image = cva([
  'w-full',
  'h-full',
  'object-cover',
  'rounded-[inherit]',
]);

export const fallback = cva(
  ['font-medium', 'h-full', 'w-full', 'flex', 'items-center', 'justify-center'],
  {
    variants: {
      loading: {
        true: ['!text-text-color-body', '!bg-loading-color-background-subdued'],
      },
    },
    defaultVariants: {
      loading: false,
    },
  }
);
