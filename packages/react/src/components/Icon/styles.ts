import { cva } from 'class-variance-authority';

export const svg = cva(['fill-current'], {
  variants: {
    color: {
      body: ['text-text-color-body'],
      'body-lighter': ['text-text-color-body-lighter'],
      caption: ['text-text-color-caption'],
      success: ['text-text-color-success'],
      danger: ['text-text-color-danger'],
      warning: ['text-text-color-warning'],
      'on-dark': ['text-text-color-on-dark'],
      'on-light': ['text-text-color-on-light'],
      inverted: ['text-text-color-inverted'],
      current: ['text-current'],
    },

    size: {
      xs: ['w-3'],
      sm: ['w-[20px]'],
      md: ['w-4'],
      lg: ['w-5'],
    },
  },

  defaultVariants: {
    color: 'body-lighter',
    size: 'md',
  },
});
