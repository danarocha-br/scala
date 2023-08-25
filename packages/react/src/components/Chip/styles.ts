import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'text-sm',
    'text-text-color-body-lighter',
    'border',
    'rounded-sm',

    'white-space-nowrap',
    'transition-[width_5s_2s_ease,_opacity_3s_0s_ease,_background-color_3s_0s_ease]',
    '[&_span]:pb-[1px]',
  ],
  {
    variants: {
      color: {
        neutral: [
          'bg-action-color-background-transparent-disabled',
          'border-transparent',
        ],
        highlight: [
          'bg-surface-color-background-default',
          'border-surface-color-background-subdued',
        ],
      },
      removable: {
        true: [
          'pr-[2px]',
          '[&_svg]:fill-text-color-caption',
          '[&_button]:-ml-1',

          'hover:bg-surface-color-background-default',
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
      hasMaxWidth: {
        true: ['max-w-[120px]', '[&_span]:truncate'],
      },
    },
    defaultVariants: {
      color: 'neutral',
      hasSlot: false,
      removable: false,
      isRemoved: false,
      hasMaxWidth: false,
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
  'dark:hover:bg-action-color-background-danger-disabled/20',
]);
