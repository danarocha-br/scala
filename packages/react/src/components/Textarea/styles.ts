import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'group',
    'flex',
    'flex-col',
    'justify-center',
    'items-start',
    'z-[1]',
    'relative',
    'border',
    'border-form-color-border-default',
    'rounded-md',
    'motion-safe:transition-all',
  ],
  {
    variants: {
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
          'hover:[&.input__addon]-text-text-color-body-lighter',
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
      isFocused: false,
      isDisabled: false,
      isReadOnly: false,
      hasIcon: false,
      isLoading: false,
    },
  }
);

export const textarea = cva(
  [
    'text-text-color-body',
    'text-md',
    'leading-relaxed',
    'py-2',
    'px-3',
    'border-t',
    'border-form-color-border-default',
    'rounded-br-[6px]',
    'rounded-bl-[6px]',
    'h-full',
    'w-[-webkit-fill-available]',
    'max-w-[100%]',
    'appearance-none',
    'transition-all',
    'resize-none',

    'placeholder:text-text-color-body-lighter',
    'placeholder:font-regular',
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
      isDisabled: {
        true: [
          'disabled:cursor-not-allowed',
          'disabled:pointer-events-none',
          'disabled:bg-form-color-border-disabled',
          'disabled:py-2',
          'disabled:px-3',
        ],
        false: [
          'enabled:group-hover:border-form-color-border-focus',
          'enabled:bg-surface-color-background-default',
          'dark:enabled:bg-background-color-default',
        ],
      },

      isReadOnly: {
        true: [
          'group-hover:read-only:!bg-transparent',
          'group-hover:placeholder:!text-text-color-body-lighter',
        ],
      },

      isFocused: {
        true: ['outline-none'],
      },
    },

    defaultVariants: {
      isFocused: false,
      isDisabled: false,
      isReadOnly: false,
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
