import { VariantProps } from 'class-variance-authority';
import * as S from './styles';

export type SpinnerProps = {
  size?: 'xs' | 'sm' | 'md';
  className?: string;
} & VariantProps<typeof S.container>;

export const Spinner = ({
  size = 'md',
  className,
  ...props
}: SpinnerProps): JSX.Element => (
  <svg
    viewBox="-24 -24 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={`c-spinner ${S.container({ size, className })}`}
    {...props}
  >
    <circle
      className={S.circle()}
      cx="0"
      cy="0"
      r="20"
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

Spinner.displayName = 'Spinner';
