import React from 'react';
import { Button as AccessibleButton } from '@ariakit/react';
import { VariantProps } from 'class-variance-authority';

import { Icon, iconPath } from '../Icon';
import * as S from './styles';

export type ButtonProps = {
  label: string;
  icon?: keyof typeof iconPath;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof S.button>;

export const Button = ({
  variant = 'primary',
  size = 'md',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  label,
  animateOnHover = false,
  type = 'button',
  icon,
  ...props
}: ButtonProps): JSX.Element => {
  const iconSize =
    size === 'md' ? 'md' : size === 'sm' ? 'sm' : size == 'xs' ? 'xs' : 'md';

  return (
    <AccessibleButton
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={label}
      type={type}
      {...props}
      className={S.button({
        size,
        color,
        variant,
        loading,
        fullWidth,
        animateOnHover,
      })}
    >
      {Boolean(icon) && (
        <Icon
          name={icon || 'plus'}
          label={label}
          color="current"
          size={iconSize}
          className={S.icon({ size, variant })}
        />
      )}

      <span
        className={`button__content z-[1] ${
          !loading && animateOnHover && 'group-hover:animate-button-on-hover'
        }`}
      >
        {label}
      </span>

      <span aria-hidden className="button__disco" />
    </AccessibleButton>
  );
};

Button.displayName = 'Button';
