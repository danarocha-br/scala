import { CSS } from '../../styles';

import type * as Stitches from '@stitches/react';

import { iconPath } from './iconPath';
import * as S from './styles';

export type IconColorProps =
  | 'body'
  | 'body-lighter'
  | 'caption'
  | 'success'
  | 'danger'
  | 'warning'
  | 'current'
  | 'on-light'
  | 'on-dark';

export type IconProps = {
  name: keyof typeof iconPath;
  color?: IconColorProps;
  /** Accessibility naming. */
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  css?: CSS;
  className?: string;
} & Stitches.VariantProps<typeof S.SVG>;

export * from './iconPath';

export const Icon = ({
  color = 'body-lighter',
  size = 'md',
  name = 'plus',
  label,
  className,
  css,
  ...props
}: IconProps): JSX.Element => (
  <S.SVG
    className={className}
    color={color}
    size={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label={label}
    aria-hidden="true"
    focusable="false"
    css={css}
    {...props}
  >
    <path d={iconPath[name]} fillRule="evenodd" clipRule="evenodd" />
  </S.SVG>
);

Icon.displayName = 'Icon';
