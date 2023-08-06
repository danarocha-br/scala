import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'text-text-color-danger',
    'bg-color-froly-100',
    'text-xs',
    'font-sans',
    'border',
    'border-color-froly-200',
    'pb-1',
    'pt-2',
    'px-3',
    'z-[-1]',
    'pointer-events-none',

    '[data-mode=dark]:text-color-neutral-200',
    '[data-mode=dark]:bg-[#f1786f20]',
    '[data-mode=dark]:border-[#f1786f20]',
  ],
  {
    variants: {
      variant: {
        inside: ['rounded-bl-md', 'rounded-br-md', 'mt-[-8px]'],
        outside: ['rounded-md', '[&_span]:mt-[-4px]'],
      },
    },

    defaultVariants: {
      variant: 'inside',
    },
  }
);
