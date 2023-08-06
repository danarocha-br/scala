import { CSS } from '../../styles';
import { Stack } from '../Stack';

export type FormProps = {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: () => any;
};

export const Form = ({
  className,
  children,
  onSubmit,
  ...props
}: FormProps): JSX.Element => (
  <Stack
    as="form"
    direction="column"
    gap="3"
    fullWidth
    className={className}
    onSubmit={onSubmit}
    {...props}
  >
    {children}
  </Stack>
);

Form.displayName = 'Form';
