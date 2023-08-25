import { cva } from 'class-variance-authority';

export const ContainerContent = cva(
  [
    'text-text-color-body',
    'text-sm',
    'min-w-[120px]',
    'rounded-sm',
    'outline-none',
    'transition-all',
    'will-chage-[transform,_opacity]',

    'data-[state=open]:data-[side=top]:animate-slide-up',
    'data-[state=open]:data-[side=right]:animate-slide-right',
    'data-[state=open]:data-[side=bottom]:animate-slide-down',
    'data-[state=open]:data-[side=left]:animate-slide-left',
    'z-max',
  ],
  {
    variants: {
      unstyled: {
        true: [],

        false: ['shadow-medium', 'bg-surface-color-background-default', 'p-2'],
      },
    },
  }
);
