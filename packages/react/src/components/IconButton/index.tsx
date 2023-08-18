import { Button as AccessibleButton } from '@ariakit/react';
import { VariantProps } from 'class-variance-authority';

import { Icon } from '../Icon';
import { iconPath } from '../Icon/iconPath';
import * as S from './styles';

export type IconButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'md' | 'sm' | 'xs';
  icon: keyof typeof iconPath;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof S.button>;

/**
 * Renders an icon button component.
 *
 * @param {string} label - The label for the button.
 * @param {string} icon - The icon name for the button.
 * @param {string} [color='primary'] - The color of the button.
 * @param {string} [size='sm'] - The size of the button.
 * @param {string} [variant='primary'] - The variant of the button.
 * @returns {JSX.Element} The rendered icon button component.
 */
export const IconButton = ({
  label,
  color = 'primary',
  size = 'sm',
  variant = 'primary',
  icon,
  disabled = false,
  loading = false,
  className,
  ...props
}: IconButtonProps): JSX.Element => (
  <AccessibleButton
    disabled={disabled || loading}
    aria-label={label}
    className={S.button({ size, color, variant, loading, className })}
    {...props}
  >
    <Icon
      name={icon}
      label={label}
      size={size === 'md' ? 'md' : size === 'sm' ? 'sm' : 'xs'}
    />
  </AccessibleButton>
);

IconButton.displayName = 'IconButton';
