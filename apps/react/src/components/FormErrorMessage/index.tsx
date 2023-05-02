import { CSS } from '../../styles';
import { Text } from '../Text';

import * as S from './styles';

export type FormErrorMessageProps = {
  children: React.ReactNode;
  variant?: 'inside' | 'outside';
  css?: CSS;
};

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  css,
  variant,
  children,
  ...props
}) => (
  <S.Container role="alert" variant={variant} css={css} {...props}>
    <Text size="sm" color="danger">
      {children}
    </Text>
  </S.Container>
);

FormErrorMessage.displayName = 'FormErrorMessage';
