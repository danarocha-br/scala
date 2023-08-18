import { cva } from 'class-variance-authority';

export const container = cva(['flex', 'flex-col', 'gap-2']);

export const root = cva(
  [
    'group',
    'flex',
    'items-center',
    'gap-2',
    'relative',
    'outline-none',
    'data-[disabled=true]:cursor-not-allowed',
    'data-[disabled=true]:opacity-60',
  ],
  {
    variants: {
      variant: {
        regular: [],
        task: ['transition-all', 'translate-0'],
      },

      hasError: {
        true: [],
      },
    },
    defaultVariants: {
      variant: 'regular',
      hasError: false,
    },
  }
);

export const checkboxWrapper = cva(
  [
    'mr-2',
    'w-[20px]',
    'h-[20px]',
    'border-2',
    'border-form-color-border-default',
    'rounded-sm',

    'focus:outline-2',
    'focus:outline-offset-2',
    'focus:outline-action-color-border-transparent-pressed',
    'group-data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        regular: [
          'group-data-[disabled]:border-form-color-border-default',
          'group-data-[state=checked]:border-interactive-color-border-enabled',
        ],
        task: ['transition-all', '[transform:translateZ(0)]'],
      },
      hasError: {
        true: ['border-form-color-border-error'],
      },
    },

    defaultVariants: {
      hasError: false,
    },
  }
);

export const checkboxWrapperTask = cva([
  'relative',
  'inline-block',
  'w-[20px]',
  'h-[20px]',
  'mr-2',
  'border-2',
  'border-form-color-border-default',
  'rounded-sm',

  'before:content-[""]',
  'before:bg-feedback-color-background-success-default',
  'before:absolute',
  'before:left-1/2',
  'before:top-1/2',
  'before:m-[-14px 0px 0px -12px]',
  'before:w-[20px]',
  'before:h-[20px]',
  'before:rounded-circle',
  'before:scale-0',

  'after:content-[""]',
  'after:absolute',
  'after:left-1',
  'after:top-[7px]',
  'after:w-[3px]',
  'after:h-[2px]',
  'after:rounded-[3px]',
  'after:[box-shadow:0 0 -18px 0 red, 12px -12px 0 red, 18px 0 0 red, 12px 12px 0 red, 0 18px 0 red, -12px 12px 0 red, -18px 0 0 red, -12px -12px 0 red]',
  'after:scale-0',

  'group-hover:border-feedback-color-background-success-enabled',
  'group-data-[state=checked]:border-transparent',

  'group-data-[state=checked]:before:scale-[1.1]',
  'group-data-[state=checked]:before:opacity-0',
  'group-data-[state=checked]:before:transition-all',

  'group-data-[state=checked]:after:scale-[1.5]',
  'group-data-[state=checked]:after:opacity-0',
  'group-data-[state=checked]:transition-all',
  'group-data-[state=checked]:duration-[0.6s]',
]);

export const label = cva([], {
  variants: {
    variant: {
      regular: ['pointer-events-none', 'align-middle'],
      task: [
        'text-text-color-body-lighter',
        'relative',
        'transition-color',
        'duration-[.3s]',
        'after:content-[""]',
        'after:bg-text-color-body-lighter',
        'after:absolute',
        'after:top-[54%]',
        'after:left-0',
        'after:w-0',
        'after:h-[1px]',
        'after:transition-all',

        'after:group-data-[state=checked]:text-text-color-body-lighter',
        'after:group-data-[state=checked]:w-full',
        'after:group-data-[state=checked]:transition-all',
      ],
    },
  },
  defaultVariants: {
    variant: 'regular',
  },
});

export const svg = cva([
  'absolute',
  'top-[4.2px]',
  'left-[-0.1px]',
  'transition-all',
  'duration-[.6s]',
  'ease',
]);

export const svgTask = cva([
  'relative',
  'scale-0',
  'fill-none',

  'group-data-[state=checked]:scale(1.1)',
  'group-data-[state=checked]:transition-all',
  'group-data-[state=checked]:delay-[.1s]',
]);

export const fieldset = cva(
  ['flex', 'flex-col', 'gap-3', 'outline-none', 'border-none', 'p-0'],
  {
    variants: {
      variant: {
        regular: [],
        task: ['w-full'],
      },
      defaultVariants: {
        variant: 'regular',
      },
    },
  }
);
