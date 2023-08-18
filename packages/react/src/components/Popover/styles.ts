import { cva } from 'class-variance-authority';

export const ContainerContent = cva(
  [
    'text-text-color-body',
    'font-sans',
    'text-sm',
    'min-w-[120px]',
    'rounded-sm',
    'outline-none',
    'transition-all',
    'duration-500',
    'ease-[cubic-bezier(0.16, 1, 0.3, 1)]',
    'will-chage-[transform, opacity]',

    'data-[state=open]:data-[side=top]:animate-[slide-up-and-fade]',
    'data-[state=open]:data-[side=right]:animate-[slide-right-and-fade]',
    'data-[state=open]:data-[side=bottom]:animate-[slide-bottom-and-fade]',
    'data-[state=open]:data-[side=left]:animate-[slide-left-and-fade]',
    'z-max',
  ],
  {
    variants: {
      unstyled: {
        true: [],

        false: ['shadow-high', 'bg-surface-color-text-default', 'p-2'],
      },
    },
  }
);
