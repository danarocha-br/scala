import { Box } from '../Box';
import { Text } from '../Text';

import * as S from './styles';

export type FormErrorMessageProps = {
  children: React.ReactNode;
  variant?: 'inside' | 'outside';
  className?: string;
};

/**
 * React component that renders a form error message.
 *
 * @param {string} className - The class name of the component.
 * @param {string} variant - The variant of the component.
 * @param {React.ReactNode} children - The children of the component.
 * @return {React.ReactNode} The rendered form error message.
 */
export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  className='',
  variant,
  children,
  ...props
}) => (
  <Box role="alert" className={S.container({ variant, className })} {...props}>
    <Text size="sm" color="danger">
      {children}
    </Text>
  </Box>
);

FormErrorMessage.displayName = 'FormErrorMessage';
