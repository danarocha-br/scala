import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'text-sm',
    'text-text-color-body-lighter',
    'border',
    'bg-action-color-background-transparent-disabled',
    'border-action-color-border-transparent-enabled',
    'rounded-sm',

    'pb-[1px]',
    'white-space-nowrap',
    'transition-[width_5s_2s_ease,_opacity_3s_0s_ease]',
  ],
  {
    variants: {
      removable: {
        true: [
          'pr-[2px]',
          '[&_svg]:fill-text-color-caption',
          '[&_button]:-ml-1',
        ],
      },
      isRemoved: {
        true: [
          'opacity-0',
          'w-0',
          'px-0',
          '[&_span]:opacity-0',
          '[&_button]:opacity-0',
        ],
        false: ['opacity-100', 'w-auto', 'px-2'],
      },
      hasSlot: {
        true: [
          '[&_svg]:w-3',
          '[&_svg]:h-3',

          '[&_.avatar_span]:w-3',
          '[&_.avatar_span]:h-3',
          '[&_.avatar-initials]:text-xxs',
        ],
      },
    },
    defaultVariants: {
      hasSlot: false,
      removable: false,
      isRemoved: false,
    },
  }
);

export const button = cva([
  'rounded-sm',
  'flex',
  'items-center',
  'justify-center',
  'outline-none',
  'cursor-pointer',
  'transition-colors',

  'hover:[&_svg]:fill-action-color-background-danger-enabled',
  'hover:bg-action-color-background-danger-disabled',
]);
