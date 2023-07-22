import React from 'react';
import { CSS } from '../../styles';
import { Icon, iconPath } from '../Icon';
import * as S from './styles';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'transparent';
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
  const iconSize = size === 'md' ? 'md' : size === 'sm' ? 'sm' : 'md';
  const iconLeft =
    size === 'lg'
      ? '-14px'
      : size === 'md'
      ? '-8px'
      : size === 'sm'
      ? '-6px'
      : '-2px';
  const iconMarginRight = size === 'xs' ? '$spacing-1' : '0';

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
          name={icon || 'plus'}
          label={label}
          color="current"
          size={iconSize}
          css={{
            left: iconLeft,
            position: 'relative',
            mr: iconMarginRight,
          }}
        />
      )}

      <span className="button__content">{label}</span>

      <span aria-hidden className="button__disco" />
    </S.Container>
  );
};

Button.displayName = 'Button';
