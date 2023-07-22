import { CSS } from '../../styles';
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
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
  css,
  ...props
}: IconButtonProps): JSX.Element => (
  <S.Container
    variant={variant}
    size={size}
    color={color}
    disabled={disabled || loading}
    loading={loading}
    aria-label={label}
    css={css}
    {...props}
  >
    <Icon
      name={icon}
      label={label}
      size={size === 'md' ? 'md' : size === 'sm' ? 'sm' : 'xs'}
    />
  </S.Container>
);

IconButton.displayName = 'IconButton';
