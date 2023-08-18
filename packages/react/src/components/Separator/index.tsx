import { Root } from '@radix-ui/react-separator';
import * as S from './styles';
import { VariantProps } from 'class-variance-authority';

export type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
} & VariantProps<typeof S.separator>;

/**
 * Render a Separator component.
 * @param orientation - The orientation of the separator.
 * @param className - Additional CSS class name for the separator.
 * @returns The rendered Separator component.
 */
export const Separator = ({
  orientation,
  className,
  ...props
}: SeparatorProps): JSX.Element => {
  const separatorClassName = S.separator({ className });
  return <Root className={separatorClassName} orientation={orientation} {...props} />;
};

Separator.displayName = 'Separator';
