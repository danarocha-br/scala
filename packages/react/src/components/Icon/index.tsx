import { VariantProps } from 'class-variance-authority';

import { iconPath } from './iconPath';
import * as S from './styles';

export type IconProps = {
  name: keyof typeof iconPath;
  /** Accessibility naming. */
  label: string;
  className?: string;
} & VariantProps<typeof S.svg>;

export * from './iconPath';

/**
 * Renders an SVG icon.
 *
 * @param {string} [props.color='body-lighter'] - The color of the icon.
 * @param {string} [props.size='md'] - The size of the icon.
 * @param {string} [props.name='plus'] - The name of the icon.
 * @param {string} [props.label] - The accessibility label for the icon.
 * @param {string} [props.className] - The class name for the icon.
 * @returns {JSX.Element} The rendered SVG icon.
 */
export const Icon = ({
  color = 'body-lighter',
  size = 'md',
  name = 'plus',
  label,
  className='',
  ...props
}: IconProps): JSX.Element => (
  <svg
    className={S.svg({ color, size, className })}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label={label}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d={iconPath[name]} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

Icon.displayName = 'Icon';
