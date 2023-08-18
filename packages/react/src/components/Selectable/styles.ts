import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'font-sans',
    'font-regular',
    'bg-action-color-background-transparent-hover',
    'rounded-sm',
    'w-full',
    'h-[34px]',
    'flex',
    'flex-col',
    'items-start',
    'justify-center',
    'z-auto',
    'relative',
    'transition-all',
    'group',
    'outline-none',

    'hover:text-text-color-body',
    'hover:bg-interactive-color-background-disabled',
    'hover:cursor-pointer',

    'hover:[.c-selectable__control]:text-text-color-body',
    'hover:[.c-selectable__control]:bg-interactive-color-background-disabled',
    'hover:[.c-selectable__control]:outline-none',

    'focus:outline-action-color-background-transparent-hover',
  ],
  {
    variants: {
      isDisabled: {
        true: [
          'cursor-not-allowed',
          'opacity-60',

          '[.c-selectable--is-disabled]:bg-form-form-color-background-default',

          'hover:border-form-color-border-default',
          'hover:[.c-selectable__control]:bg-form-color-background-default',
          'hover:[.c-selectable__input-container]:text-text-color-body',
          'hover:[.c-selectable__placeholder]:text-text-color-body-lighter',
          'hover:[.c-selectable__clear-indicator]:text-text-color-body',
          'hover:[.c-selectable__dropdown-indicator]:text-text-color-caption',
          'hover:[.c-selectable__dropdown-indicator]:opacity-60',
        ],
      },
    },
    defaultVariants: {
      isDisabled: false,
    },
  }
);

export const select = cva([
  'w-full',

  '[.c-selectable]:w-full',
  '[.c-selectable__control]:w-full',
  '[.c-selectable__control]:font-sans',
  '[.c-selectable__control]:text-sm',
  'md:[.c-selectable__control]:text-md',
  '[.c-selectable__control]:bg-transparent',
  '[.c-selectable__control]:border-none',
  '[.c-selectable__control]:appearance-none',
  '[.c-selectable__control]:px-1',
  '[.c-selectable__control]:transition-all',
  '[.c-selectable__control]:shadow-none',
  '[.c-selectable__control]:outline-none',
  '[.c-selectable__control]:outline-action-color-background-transparent-hover',

  '[.c-selectable__control--is-focused]:text-text-color-body',
  '[.c-selectable__control--is-focused]:bg-interactive-color-background-disabled',
  '[.c-selectable__control--is-focused]:outline-2',
  '[.c-selectable__control--is-focused]:outline-offset-2',
  '[.c-selectable__control--is-focused]:outline-interactive-color-background-disabled',

  '[.c-selectable__control__placeholder]:text-text-color-body-lighter',
  '[.c-selectable__control__placeholder]:font-regular',

  '[.c-selectable__single-value]:text-text-color-body',

  '[.c-selectable__option]:text-text-color-body',
  '[.c-selectable__option]:py-12',
  '[.c-selectable__option]:transition-all',
  '[.c-selectable__option]:flex',
  '[.c-selectable__option]:gap-1',

  '[.c-selectable__single-value]:text-text-color-body',

  '[.c-selectable__option]:gap-1',
  '[.c-selectable__option]:justify-between',
  '[.c-selectable__option]:items-center',
  '[.c-selectable__option]:whitespace-nowrap',
  '[.c-selectable__option]:w-full',
  '[.c-selectable__option]:rounded-xs',

  '[.c-selectable__option--is-focused]:bg-action-color-background-transparent-hover',

  '[.c-selectable__option--is-selected]:bg-interactive-color-background-disabled',

  '[.c-selectable__menu]:bg-surface-color-background-default',
  '[.c-selectable__menu]:rounded-sm',
  '[.c-selectable__menu]:border',
  '[.c-selectable__menu]:border-action-color-border-transparent-enabled',
  '[.c-selectable__menu]:shadow-low',
  '[.c-selectable__menu]:p-1',
  '[.c-selectable__menu]:z-[3]',
  '[.c-selectable__menu]:min-w-[120px]',
  '[.c-selectable__menu]:w-auto',

  '[.c-selectable__menu-list]:p-0',
  '[.c-selectable__menu-list]:rounded-sm',

  '[.c-selectable--is-disabled]:cursor-not-allowed',
  '[.c-selectable--is-disabled]:opacity-60',
  '[.c-selectable--is-disabled]:bg-surface-color-background-default',

  '[.c-selectable__value-container--is-multi]:gap-1',
  '[.c-selectable__multi-value]:bg-transparent',
  '[.c-selectable__multi-value]:relative',
  '[.c-selectable__multi-value]:transition-all',

  '[.c-selectable__multi-value__label]:text-text-color-body',
  '[.c-selectable__multi-value__label]:text-sm',
  '[.c-selectable__multi-value__label]:flex',
  '[.c-selectable__multi-value__label]:items-center',
  '[.c-selectable__multi-value__label]:gap-1',
  '[.c-selectable__multi-value__label]:relative',
  '[.c-selectable__multi-value__label]:top-[-1px]',
  '[.c-selectable__multi-value__label]:p-0',

  '[.c-selectable__multi-value__remove]:text-text-color-caption',
  '[.c-selectable__multi-value__remove]:opacity-50',
  '[.c-selectable__multi-value__remove]:p-0',
  '[.c-selectable__multi-value__remove]:ml-1',
  '[.c-selectable__multi-value__remove]:hidden',

  '[.c-selectable__multi-value]:hover:[.c-selectable__multi-value__remove]:flex',
]);

export const buttonContainer = cva(
  [
    'font-sans',
    'text-text-color-body-lighter',
    'bg-action-color-background-transparent-hover',
    'border-none',
    'rounded-sm',
    'outline-none',
    'outline-transparent',
    'cursor-pointer',
    'flex',
    'items-center',
    'gap-2',
    'px-2',
    'h-[34px]',
    'transition-all',

    'hover:text-text-color-body',
    'hover:bg-interactive-color-background-disabled',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-action-color-background-transparent-hover',

    'active:scale-95',
    'aria-disabled:opacity-50',
    'aria-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      isActive: {
        true: ['text-text-color-body'],
      },
    },

    defaultVariants: {
      isActive: false,
    },
  }
);
