import { cva } from 'class-variance-authority';

export const root = cva(['flex', 'flex-col', 'gap-2'], {
  variants: {
    fullWidth: {
      true: ['w-full'],
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const item = cva(
  [
    'group',
    'flex',
    'items-center',
    'gap-3',
    'rounded-md',
    'select-none',
    'cursor-pointer',
    'relative',
    'transition-all',
    'duration-300',

    'data-[state=checked]:opacity-100',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary: ['gap-2', 'pr-2', 'py-1', 'rounded-pill'],

        secondary: [
          'border-2',
          'border-action-color-border-transparent-enabled',
          'opacity-70',
          'py-6',
          'px-3',
          'gap-2',

          '[&_svg_circle]:stroke-none',
          'data-[state=checked]:bg-form-color-background-default',
          'data-[state=checked]:border-interactive-color-background-enabled',
          'data-[state=checked]:shadow-low',
          'data-[state=checked]:opacity-100',
        ],

        boxed: [
          'border',
          'border-form-color-border-default',
          'opacity-100',
          'py-6',
          'px-3',
          'gap-2',
          'w-full',
          'flex-col',

          'data-[state=checked]:bg-form-color-background-default',
          'data-[state=checked]:border-interactive-color-background-enabled',
          'data-[state=checked]:border-2',
          'data-[state=checked]:opacity-100',

          '[&_span]:mt-5',
        ],
      },

      hasError: {
        true: ['border-form-color-border-error'],
      },

      hasIcon: {
        true: [],
      },

      isDisabled: {
        true: [
          'border-form-color-border-disabled',
          'cursor-not-allowed',

          '[&_span]:opacity-60',
          '[&_label]:opacity-60',
        ],
      },

      fullWidth: {
        true: ['w-full'],
      },
    },

    compoundVariants: [
      {
        variant: 'primary',
        isDisabled: false,
        class: ['active:scale(0.97)'],
      },
      {
        variant: 'secondary',
        isDisabled: false,
        class: [
          'hover:border-interactive-color-background-enabled',
          'hover:scale-[.99]',
          'hover:opacity-100',

          'active:scale(0.97)',
        ],
      },
      {
        variant: 'boxed',
        isDisabled: false,
        class: [
          'hover:border-interactive-color-background-enabled',
          'hover:scale-[.99]',
          'hover:opacity-100',

          'active:scale(0.97)',
        ],
      },
      {
        variant: 'boxed',
        hasIcon: true,
        class: ['items-baseline', '[&_label]:relative', '[&_label]:top-5'],
      },
    ],

    defaultVariants: {
      variant: 'primary',
      isDisabled: false,
      fullWidth: false,
    },
  }
);

export const fieldset = cva(
  [
    'flex',
    'flex-col',
    'gap-2',
    'outine-none',
    'border-none',
    'p-0',
    'w-full',
    'select-none',

    'focus-visible:aria-[activedescendant]:shadow-low',
    'focus-visible:aria-[activedescendant]:rounded-md',
  ],
  {
    variants: {
      variant: {
        primary: [],
        secondary: ['w-full'],
        boxed: [
          'w-full',
          'grid',
          'grid-cols-[1fr]',
          'grid-rows-[auto]',
          '[column-gap=16px]',
          '[row-gap=16px]',

          'md:grid-cols-[1fr_1fr_1fr]',
        ],
      },
      fullWidth: {
        true: [],
      },
    },

    compoundVariants: [
      {
        variant: 'boxed',
        fullWidth: true,
        class: ['md:flex', 'md:flex-row'],
      },
    ],

    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
    },
  }
);

export const svg = cva(
  ['fill-none', 'align-middle', '[&_circle]:stroke-2', '[&_path]:stroke-2'],
  {
    variants: {
      variant: {
        primary: [],
        secondary: [],
        boxed: ['[&_circle]:stroke-none', 'absolute', 'top-2', 'left-2'],
      },
      hasError: {
        true: [
          '[&_path]:stroke-form-color-border-error',
          '[&_circle]:stroke-form-color-border-error',
        ],
        false: [
          '[&_path]:stroke-interactive-color-background-enabled',
          '[&_circle]:stroke-form-color-border-default',
        ],
      },

      isDisabled: {
        true: {
          true: ['[&_path]:form-color-border-default'],
        },
      },
    },

    defaultVariants: {
      variant: 'primary',
      hasError: false,
      isDisabled: false,
    },
  }
);

export const svgOuter = cva(
  [
    'stroke-2',
    '[stroke-dasharray:57px]',
    '[stroke-dashoffset:57px]',

    'group-data-[state=checked]:transition-all',
    'group-data-[state=checked]:duration-300',
    'group-data-[state=checked]:[stroke-dashoffset:0]',
  ],
  {
    variants: {
      variant: {
        primary: [],
        secondary: [],

        boxed: [],
      },
      isDisabled: {
        true: ['opacity-60'],
        false: ['group-hover:transition-all', 'group-hover:duration-300'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
    compoundVariants: [
      {
        variant: 'primary',
        isDisabled: false,
        class: ['group-hover:[stroke-dashoffset:0]'],
      },
      {
        variant: 'secondary',
        isDisabled: false,
        class: ['group-hover:[stroke-dashoffset:0]'],
      },
      {
        variant: 'boxed',
        isDisabled: false,
        class: ['group-hover:[stroke-dashoffset:0]'],
      },
    ],
  }
);

export const svgInner = cva([
  'stroke-[6px]',
  '[stroke-dasharray:19px]',
  '[stroke-dashoffset:19px]',

  'group-data-[state=checked]:transition-all',
  'group-data-[state=checked]:duration-300',
  'group-data-[state=checked]:[stroke-dasharray:38px]',
  'group-data-[state=checked]:delay-100',

  'group-hover:transition-all',
  'group-hover:duration-300',
]);

export const radioIcon = cva(
  [
    'group-data-[state=checked]:text-interactive-color-background-enabled',
    'group-data-[state=checked]:fill-interactive-color-background-enabled',
  ],
  {
    variants: {
      variant: {
        primary: [],
        secondary: [],

        boxed: ['mt-[40px]', 'ml-1'],
      },
      isDisabled: {
        true: ['opacity-60'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
