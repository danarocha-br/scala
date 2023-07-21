import React from 'react';
import { CSS } from '../../styles';
import { Icon, iconPath } from '../Icon';
import * as S from './styles';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'transparent' | 'icon';
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  icon?: keyof typeof iconPath;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  animateOnHover?: boolean;
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
  return (
    <S.Container
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      color={color}
      disabled={disabled || loading}
      loading={loading}
      onClick={onClick}
      aria-label={label}
      animateOnHover={animateOnHover}
      type={type}
      {...props}
      className="button"
    >
      {Boolean(icon) && (
        <Icon
          name={(Boolean(icon) && icon) || 'plus'}
          label={label}
          color="current"
          size={
            size === 'md'
              ? 'md'
              : size === 'sm'
              ? 'sm'
              : size === 'xs'
              ? 'xs'
              : 'lg'
          }
          css={{ marginRight: `${variant !== 'icon' && '$spacing-4'}` }}
        />
      )}

      {variant !== 'icon' && <span className="button__content">{label}</span>}

      <span aria-hidden className="button__disco" />
    </S.Container>
  );
};

Button.displayName = 'Button';
