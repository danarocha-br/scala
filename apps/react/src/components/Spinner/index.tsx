import { CSS } from '../../styles';

import * as S from './styles';

export type SpinnerProps = {
  size?: 'xs' | 'sm' | 'md';
  css?: CSS;
};

export const Spinner = ({
  size = 'md',
  css,
  ...props
}: SpinnerProps): JSX.Element => (
  <S.Container
    className="c-spinner"
    viewBox="-24 -24 48 48"
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    css={css}
    {...props}
  >
    <circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
  </S.Container>
);

Spinner.displayName = 'Spinner';
