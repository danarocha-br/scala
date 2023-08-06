import { Box } from '../Box';
import { Text } from '../Text';

import * as S from './styles';

export type FormErrorMessageProps = {
  children: React.ReactNode;
  variant?: 'inside' | 'outside';
  className?: string;
};

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  className,
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
