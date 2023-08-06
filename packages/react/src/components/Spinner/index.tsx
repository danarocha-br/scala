
import * as S from './styles';

export type SpinnerProps = {
  size?: 'xs' | 'sm' | 'md';
  className?: string;
};

export const Spinner = ({
  size = 'md',
  className,
  ...props
}: SpinnerProps): JSX.Element => (
  <S.Container

    viewBox="-24 -24 48 48"
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    className={`c-spinner ${className}`}
    {...props}
  >
    <circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
  </S.Container>
);

Spinner.displayName = 'Spinner';
