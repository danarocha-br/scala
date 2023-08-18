import { cva } from 'class-variance-authority';

export const addon = cva(
  [
    'text-text-color-body',
    'text-sm',
    'mt-1',
    'absolute',
    'top-5',
    'left-3',
    'group-hover:text-text-color-on-dark',
  ],
  {
    variants: {
      isFocused: {
        true: ['text-text-color-on-dark'],
      },
      isDisabled: {
        true: [
          'text-text-color-body-lighter',
          'group-hover:text-text-color-body-lighter',
        ],
      },
      isTable: {
        true: ['top-[10px]', 'mt-0'],
      },
      isReadOnly: {
        true: [
          '!mt-0',
          'top-[28px]',
          '!left-0',
          'group-hover:text-text-color-body',
        ],
      },
    },

    defaultVariants: {
      isFocused: false,
      isTable: false,
      isDisabled: false,
      isReadOnly: false,
    },
  }
);

export const baseInputStyle = cva(
  [
    'font-sans',
    'text-text-color-body',
    'text-md',
    'py-2',
    'px-3',
    'border-t',
    'border-form-color-border-default',
    'w-[-webkit-fill-available]',
    'max-w-[100%]',
    'appearance-none',
    'transition-all',

    'placeholder:text-text-color-body-lighter',
    'placeholder:font-regular',
    'placeholder:font-sans',
    'placeholder:opacity-40',

    'read-only:border-none',
    'read-only:outline-none',
    'read-only:p-0',
    'read-only:border-t-none',
    'read-only:select-none',
    'read-only:pointer-events-none',

    'read-only:focus:text-text-color-body',
    'read-only:focus:!bg-transparent',

    'read-only:[&_.input__addon]:text-text-color-body-lighter',

    'autofill:shadow-[0_0_0_16px_hsl(var(--text-color-body)_inset]',
    'autofill:[filter=none]',
  ],
  {
    variants: {
      variant: {
        default: ['rounded-br-sm', 'rounded-bl-sm', 'h-full'],
        table: [
          'rounded-none',
          'border',
          'border-transparent',
          'enabled:hover:border-form-color-border-focus',
          'enabled:focus:border-form-color-border-focus',
          'h-6',

          'read-only:py-0',
          'read-only:px-2',
        ],
      },

      isDisabled: {
        true: [
          'disabled:cursor-not-allowed',
          'disabled:pointer-events-none',
          'disabled:bg-form-color-border-disabled',
          'disabled:py-2',
          'disabled:px-3',
        ],
        false: [
          'enabled:bg-form-color-background-default',

          'enabled:group-hover:text-text-color-on-dark',
          'enabled:group-hover:bg-form-color-background-hover',
          'enabled:group-hover:border-form-color-border-focus',
          'enabled:group-hover:placeholder:text-text-color-on-dark',
          'enabled:group-hover:focus:bg-form-color-background-focus',
          'enabled:group-hover:hover:text-text-color-on-dark',
        ],
      },

      isReadOnly: {
        true: [
          'group-hover:read-only:!bg-transparent',
          'group-hover:placeholder:!text-text-color-body-lighter',
        ],
      },

      isFocused: {
        true: [
          'text-text-color-on-dark',
          '!bg-form-color-background-focus',
          'outline-none',
          'placeholder:text-text-color-on-dark',
        ],
      },

      hasAddon: {
        true: ['!pl-9'],
      },
    },

    defaultVariants: {
      variant: 'default',
      isFocused: false,
      isDisabled: false,
      isReadOnly: false,
      hasAddon: false,
    },
  }
);

export const container = cva(
  [
    'group',
    'font-sans',
    'flex',
    'flex-col',
    'justify-center',
    'items-start',
    'z-[1]',
    'relative',
    'border',
    'border-form-color-border-default',
    'motion-safe:transition-all',
  ],
  {
    variants: {
      variant: {
        default: ['rounded-md'],
        table: ['rounded-none', 'border-none'],
      },

      isFocused: {
        true: [
          'border-form-color-border-focus',
          'transition-all',
          '[&.input__icon--password]:text-text-color-on-dark',
        ],
      },

      isDisabled: {
        true: [
          'cursor-not-allowed',
          'opacity-70',
          '[&_input:disabled]:border-form-color-border-default',
        ],

        false: [
          'bg-surface-color-background-subdued',
          'hover:border-form-color-border-focus',
        ],
      },

      hasIcon: {
        true: ['[&_.input__icon]:mr-1', '[&_.input__icon--error]:right-6'],
      },

      isReadOnly: {
        true: [
          'border-none',
          'bg-transparent',
          'hover:[&.input__addon]text-text-color-body-lighter',
        ],
      },

      hasError: {
        true: [
          'border-form-color-border-error',
          '[&_input]:border-t',
          '[&_input]:border-form-color-border-error',
          '[&_.input__action]:translate-x-[-5]',
        ],
      },

      isLoading: {
        true: ['[&_button]:translate-x-[-32px]'],
      },
    },
    defaultVariants: {
      variant: 'default',
      isFocused: false,
      isDisabled: false,
      isReadOnly: false,
      hasIcon: false,
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

    '[&.input__error-icon]:absolute',
    '[&.input__error-icon]:right-1',
  ],
  {
    variants: {
      isReadOnly: {
        true: ['pl-0'],
      },
      isDisabled: {
        true: ['opacity-70'],
      },
    },

    defaultVariants: {
      isReadOnly: false,
    },
  }
);

export const settingsButton = cva([
  'text-text-color-body',
  'text-xs',
  'bg-transparent',
  'flex',
  'items-center',
  'gap-1',
  'z-[100]',
  'absolute',
  'right-2',
  'top-1',
  'opacity-70',
  'transition-opacity',
  'outline-none',

  'hover:opacity-100',
  'hover:text-action-color-background-primary-hover',
  'focus:text-action-color-background-primary-focus',
  'focus:outline-1',
  'focus:outline-action-color-border-transparent-pressed',
  'focus:opacity-100',
]);

export const icon = cva([], {
  variants: {
    isFocused: {
      true: [
        'fill-form-color-background-focus',
        'data-[mode=dark]:fill-form-color-background-subdued',
      ],
      false: ['fill-current'],
    },
  },
});
