import { CSS } from '../../styles';
import { Stack } from '../Stack';

export type FormProps = {
  children: React.ReactNode;
  css?: CSS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: () => any;
};

export const Form = ({
  css,
  children,
  onSubmit,
  ...props
}: FormProps): JSX.Element => (
  <Stack
    as="form"
    direction="column"
    gap="3"
    fullWidth
    css={css}
    onSubmit={onSubmit}
    {...props}
  >
    {children}
  </Stack>
);

Form.displayName = 'Form';
