import { cva } from 'class-variance-authority';

export const container = cva(
  [
    'group',
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

    'peer-focus/input:border-form-color-border-focus',
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

export const placeholder = cva([], {
  variants: {
    isDisabled: {
      true: ['opacity-70'],
      false: [
        'text-text-color-caption',
        'group-hover:text-text-color-on-dark',
        'group-focus/input:text-text-color-on-dark',
      ],
    },
    isFocused: {
      true: ['text-text-color-on-dark'],
      false: ['text-text-color-caption'],
    },
  },

  defaultVariants: {
    isDisabled: false,
    isFocused: false,
  },
});

export const inputWrapper = cva(
  [
    'bg-form-color-background-default',
    'flex',
    'justify-between',
    'items-center',
    'gap-1',
    'pl-3',
    'pr-2',
    'w-full',
    'transition-all',
    'duration-300',
    'group/input',
    'peer/input',

    'focus:outline-none',
    'focus:text-text-color-on-dark',
    'focus:bg-form-color-background-focus',
    'focus:border-form-color-border-focus',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-t',
          'border-form-color-border-default',
          'rounded-bl-[6px]',
          'rounded-br-[6px]',
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
  'text-text-color-body-lighter',
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'gap-3',
  'p-2',
  'w-full',
]);

export const item = cva(['group/item', 'gap-2'], {
  variants: {
    isActive: {
      true: [],
    },

    isMulti: {
      true: [],
    },
  },

  compoundVariants: [
    {
      isActive: true,
      isMulti: false,
      class: [
        'bg-interactive-color-background-subdued/20',
        'hover:bg-interactive-color-background-subdued/30',
      ],
    },
  ],

  defaultVariants: {
    isActive: false,
    isMulti: false,
  },
});

export const deleteButton = cva(
  [
    'opacity-80',
    'outline-none',
    'transition-opacity',

    'hover:bg-transparent',
    'hover:opacity-100',

    'focus:outline-none',
    'focus:outline-offset-0',
    'focus:outline-transparent',

    'group-hover:text-text-color-on-dark',
  ],
  {
    variants: {
      isFocused: {
        true: ['text-text-color-on-dark'],
        false: ['text-text-color-on-light'],
      },
    },

    defaultVariants: {
      isFocused: false,
    },
  }
);

export const chips = cva(
  [
    'truncate',
    'text-left',
    'text-sm',
    'flex',
    'gap-1',
    'w-full',
    'items-center',
  ],
  {
    variants: {
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
    },
  }
);
