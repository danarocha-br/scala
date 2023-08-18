
import { VariantProps } from 'class-variance-authority';

import { Box } from '../Box';
import * as S from './styles';

export type CardProps = {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
} & VariantProps<typeof S.card>;

/**
 * Renders a card component with the provided children and additional props.
 *
 * @param {ReactNode} props.children - The children to be rendered inside the card.
 * @param {string} props.className - Additional CSS class name for the card.
 * @return {JSX.Element} The rendered card component.
 */
export const Card = ({
  children,
  className,
  ...props
}: CardProps): JSX.Element => (
  <Box className={S.card({ className })} {...props}>
    {children}
  </Box>
);

Card.displayName = 'Card';
