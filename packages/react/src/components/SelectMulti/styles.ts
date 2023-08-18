import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'group',
    'font-sans',
    'flex',
    'flex-col',
    'justify-center',
    'items-start',
    'w-full',
    'border',
    'border-form-color-border-default',
    'transition-all',
    'duration-300',
    'overflow-visible',
  ],
  {
    variants: {
      variant: {
        default: ['rounded-md'],
        table: ['rounded-none', 'border-none'],
      },

      isDisabled: {
        true: ['cursor-not-allowed', 'opacity-70', 'select-none'],

        false: [
          'bg-surface-color-background-subdued',
          'hover:border-form-color-border-focus',
        ],
      },

      hasError: {
        true: ['border-form-color-border-error'],
      },

      isFocused: {
        true: ['border-form-color-border-focus'],
      },

      isLoading: {
        true: [],
      },
    },
    defaultVariants: {
      variant: 'default',
      isDisabled: false,
      isFocused: false,
      isLoading: false,
    },
  }
);

export const label = cva(
  [
    'text-text-color-body-lighter',
    'text-xs',
    'font-medium',
    'py-1',
    'px-3',
    'flex',
    'justify-between',
    'w-[-webkit-fill-available]',
    'relative',

    '[&.select-icon--error]:absolute',
    '[&.select-icon--error]:right-1',
  ],
  {
    variants: {
      isFocused: {
        true: ['[&_svg]:text-form-color-background-focus'],
      },

      isDisabled: {
        true: ['opacity-70'],
      },
    },

    defaultVariants: {
      isFocused: false,
      isDisabled: false,
    },
  }
);

export const icon = cva([
  'fill-current',
  'peer-focus:fill-form-color-background-focus',
  'peer-focus-within:fill-form-color-background-focus',
  'data-[mode=dark]:peer-focus:fill-form-color-background-subdued',
]);

export const input = cva([
  'bg-transparent',
  'min-h-[40px]',
  'h-auto',
  'w-full',
  'flex-1',
  'outline-none',
  'transition-all',
  'duration-300',
  'peer',

  'placeholder:text-text-color-caption',

  'group-hover:placeholder:text-text-color-on-dark',

  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
  'disabled:group-hover:placeholder:text-text-color-caption',

  {
    variants: {
      isFocused: {
        true: ['placeholder:text-text-color-on-dark'],
      },
    },
    defaultVariants: {
      isFocused: false,
    },
  },
]);

export const inputWrapper = cva(
  [
    'bg-form-color-background-default',
    'flex',
    'flex-wrap',
    'gap-1',
    'pl-3',
    'pr-2',
    'transition-all',
    'duration-300',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-t',
          'border-form-color-border-default',
          'rounded-bl-[5px]',
          'rounded-br-[5px]',
          'min-h-[41px]',
        ],
        table: ['rounded-none', 'border-none', 'min-h-[50px]'],
      },

      isFocused: {
        true: [
          'text-text-color-on-dark',
          'bg-form-color-background-focus',
          'border-form-color-border-focus',
        ],
      },

      isDisabled: {
        true: [
          'cursor-not-allowed',
          'opacity-70',
          'select-none',
          'bg-form-color-border-disabled',
        ],

        false: [
          'group-hover:text-text-color-on-dark',
          'group-hover:bg-form-color-background-hover',
          'group-hover:border-form-color-border-hover',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
      isFocused: false,
      isDisabled: false,
    },
  }
);

export const dialog = cva([
  'absolute',
  'top-2',
  'z-10',
  'w-full',
  'rounded-md',
  'border',
  'border-action-color-border-transparent-pressed',
  'bg-surface-color-background-default',
  'outline-none',
]);

export const empty = cva([
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'gap-3',
  'p-2',
  'w-full',
]);
