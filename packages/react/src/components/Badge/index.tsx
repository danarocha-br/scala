import { VariantProps } from 'class-variance-authority';

import { Box } from '../Box';
import * as S from './styles';

export type BadgeProps = {
  className?: string;
  label: string | React.ReactNode | React.ReactElement;
} & VariantProps<typeof S.badge>;

/**
 * Renders a badge component with the specified label, variant, color, and other props.
 *
 * @param {string} className - The CSS class name for the badge component.
 * @param {string} label - The label text to display within the badge.
 * @param {string} variant - The variant of the badge component (default: 'default').
 * @param {string} color - The color of the badge component (default: 'primary').
 * @param {boolean} outlined - Whether the badge component should be outlined (default: false).
 * @returns {JSX.Element} The rendered badge component.
 */
export const Badge = ({
  className,
  label,
  variant = 'default',
  color = 'primary',
  outlined = false,
  ...props
}: BadgeProps): JSX.Element => (
  <Box
    as="span"
    className={S.badge({ color, variant, outlined, className })}
    {...props}
  >
    {label}
  </Box>
);

Badge.displayName = 'Badge';
