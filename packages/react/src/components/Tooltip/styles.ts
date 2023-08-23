import { cva } from 'class-variance-authority';

export const content = cva(
  [
    'text-text-color-body',
    'text-xs',
    'font-sans',
    'bg-surface-color-background-default',
    'px-2',
    'py-1',
    'inline-flex',
    'items-center',
    'gap-2',
    'shadow-[hsl(206_22%_10%_/_5%)_0px_0px_20px_5px]',
    'rounded-sm',
    'border',
    'border-action-color-background-transparent-pressed',
    'transition-all',
    'z-max',

    'will-change-[transform,_opacity]',
    'data-[state=delayed-open]:data-[side=top]:animate-slide-up',

    'data-[state=delayed-open]:data-[side=right]:animate-slide-right',

    'data-[state=delayed-open]:data-[side=bottom]:animate-slide-down',

    'data-[state=delayed-open]:data-[side=left]:animate-slide-left',
  ],
  {
    variants: {
      hasSlot: {
        true: ['px-1'],
      },
    },

    defaultVariants: {
      hasSlot: false,
    },
  }
);

export const arrow = cva(['fill-none']);
