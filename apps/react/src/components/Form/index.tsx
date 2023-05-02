import { CSS } from '../../styles';
import { Stack } from '../Stack';

export type FormProps = {
  children: React.ReactNode;
  css?: CSS;
};

export const Form = ({ css, children, ...props }: FormProps): JSX.Element => (
  <Stack as="form" direction="column" gap="3" fullWidth css={css} {...props}>
    {children}
  </Stack>
);

Form.displayName = 'Form';
