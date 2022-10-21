import { CSS } from '../../styles';

import type * as Stitches from '@stitches/react';

import { iconPath } from './iconPath';
import * as S from './styles';

export type IconColorProps =
  | 'body'
  | 'subtext'
  | 'caption'
  | 'success'
  | 'danger'
  | 'warning'
  | 'current'
  | 'inverted'
  | 'on-interactive';

export type IconProps = {
  name: keyof typeof iconPath;
  color?: IconColorProps;
  className?: string;
  /** Accessibility naming. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  css?: CSS;
} & Stitches.VariantProps<typeof S.SVG>;

export * from './iconPath';

export const Icon = ({
  color = 'subtext',
  size = 'md',
  name = 'plus',
  className,
  label,
  css,
  ...props
}: IconProps) => (
  <S.SVG
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