import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const text = cva(['m-0', 'font-normal', 'tabular-nums', 'block'], {
  variants: {
    size: {
      xxs: ['text-xxs'],
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-md'],
      lg: ['text-lg'],
      xl: ['text-xl'],
      '2xl': ['text-2xl'],
      '3xl': ['text-3xl'],
      '4xl': ['text-4xl'],
    },

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

    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },

    align: {
      center: ['text-center'],
      left: ['text-left'],
      right: ['text-right'],
    },

    leading: {
      '1': ['leading-tight'],
      '2': ['leading-snug'],
      '3': ['leading-normal'],
      '4': ['leading-relaxed'],
      '5': ['leading-loose'],
      '6': ['leading-3'],
      '7': ['leading-4'],
      '8': ['leading-5'],
      '9': ['leading-6'],
    },
  },
  defaultVariants: {
    align: 'left',
    size: 'md',
    color: 'body',
    leading: '4',
    weight: 'regular',
  },
});

export type TextProps = Polymorphic.ForwardRefComponent<
  'span',
  { children: React.ReactNode; className?: string } & VariantProps<typeof text>
>;

export const Text = forwardRef(
  (
    {
      as: Component = 'span',
      children,
      className,
      size,
      color,
      weight,
      align,
      leading,
      ...props
    },
    forwardedRef
  ) => (
    <Component
      {...props}
      ref={forwardedRef}
      className={text({ size, color, weight, align, leading, className })}
    >
      {children}
    </Component>
  )
) as TextProps;
