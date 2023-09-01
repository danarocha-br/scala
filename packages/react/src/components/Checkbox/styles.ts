import { cva } from 'class-variance-authority';

//TODO: make sure that the checkbox has motion-safe to disable animation when on

export const container = cva(['flex', 'flex-col', 'gap-2']);

export const root = cva(
  [
    'group',
    'flex',
    'items-center',
    'gap-2',
    'relative',
    'outline-none',
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:opacity-60',
  ],
  {
    variants: {
      variant: {
        regular: [],
        task: ['transition-all', '[transform:translateZ(0)]'],
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

    'group-focus:outline-2',
    'group-focus:outline-offset-2',
    'group-focus:outline-action-color-border-transparent-pressed',

    'group-data-[disabled]:cursor-not-allowed',

    'group-data-[state=checked]:border-interactive-color-border-enabled',
  ],
  {
    variants: {
      variant: {
        regular: [''],
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
  'transition-all',
  'duration-300',

  'before:content-[""]',
  'before:bg-feedback-color-background-success-enabled',
  'before:absolute',
  'before:left-1/2',
  'before:top-1/2',
  'before:m-[-10px_0px_0px_-10px]',
  'before:w-[20px]',
  'before:h-[20px]',
  'before:rounded-circle',
  'before:scale-0',

  'after:content-[""]',
  'after:absolute',
  'after:left-[6px]',
  'after:top-[7px]',
  'after:w-[3px]',
  'after:h-[2px]',
  'after:rounded-[3px]',
  'after:shadow-[0_-18px_0_hsl(var(--feedback-color-background-success-enabled)),_12px_-12px_0_hsl(var(--feedback-color-background-success-enabled)),_18px_0_0_hsl(var(--feedback-color-background-success-enabled)),_12px_12px_0_hsl(var(--feedback-color-background-success-enabled)),_0_18px_0_hsl(var(--feedback-color-background-success-enabled)),_-12px_12px_0_hsl(var(--feedback-color-background-success-enabled)),_-18px_0_0_hsl(var(--feedback-color-background-success-enabled)),_-12px_-12px_0_hsl(var(--feedback-color-background-success-enabled))]',
  'after:scale-0',

  'group-hover:border-feedback-color-background-success-enabled',
  'group-hover:data-[disabled]:border-form-color-border-default',
  'group-data-[state=checked]:border-transparent',

  'group-data-[state=checked]:before:scale-[1.1]',
  'group-data-[state=checked]:before:opacity-0',
  'group-data-[state=checked]:before:transition-all',

  'group-data-[state=checked]:after:scale-[1.5]',
  'group-data-[state=checked]:after:opacity-0',
  'group-data-[state=checked]:after:transition-all',
  'group-data-[state=checked]:after:duration-[0.6s]',

  'group-focus:outline-2',
  'group-focus:outline-offset-2',
  'group-focus:outline-action-color-border-transparent-pressed',
  'group-data-[disabled]:cursor-not-allowed',
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
        'ease',

        'after:content-[""]',
        'after:bg-text-color-body-lighter',
        'after:absolute',
        'after:top-[54%]',
        'after:left-0',
        'after:w-0',
        'after:h-[1px]',

        'group-data-[state=checked]:text-text-color-body-lighter',
        'group-data-[state=checked]:after:w-full',
        'group-data-[state=checked]:after:transition-all',
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

export const svgPathRegular = cva(
  [
    'stroke-2',
    'transition-all',
    'duration-[0.6s]',
    'ease',

    '[stroke-dasharray:71px]',
    '[stroke-dashoffset:71px]',

    'group-hover:[stroke-dashoffset:0]',

    'group-data-[state=checked]:fill-interactive-color-border-enabled',
  ],
  {
    variants: {
      disabled: {
        true: [
          'fill-form-color-border-default',
          'stroke-form-color-border-default',
        ],
        false: ['fill-none', 'stroke-interactive-color-background-enabled'],
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export const svgPolylineRegular = cva([
  'fill-none',
  'stroke-white',
  'stroke-2',
  'ml-1',
  'translate-x-[2px]',
  'translate-y-[1px]',
  'scale-[.85]',
  'transition-all',
  'duration-300',
  '[stroke-dasharray:18px]',
  '[stroke-dashoffeset:18px]',
  'group-data-[state=checked]:[stroke-dashoffset:0]',
]);

export const svgTask = cva([
  'relative',
  'scale-0',
  'fill-none',

  'group-data-[state=checked]:scale-150',
  'group-data-[state=checked]:transition-all',
  'group-data-[state=checked]:delay-[.1s]',
  'group-data-[state=checked]:duration-500',
  'group-data-[state=checked]:ease',
]);

export const svgPolylineTask = cva([
  'stroke-feedback-color-background-success-enabled',
  'stroke-2',
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
