import { CSS } from '../../styles';

import * as S from './styles';

export type BadgeProps = {
  css?: CSS;
  label: string;
  variant?: 'default' | 'pill';
  color?: 'secondary' | 'primary' | 'danger' | 'warning' | 'on-dark';
  outlined?: boolean;
};

export const Badge = ({
  css,
  label,
  variant = 'default',
  color = 'primary',
  outlined = false,
  ...props
}: BadgeProps): JSX.Element => (
  <S.Container
    css={css}
    color={color}
    variant={variant}
    outlined={outlined}
    {...props}
  >
    {label}
  </S.Container>
);

Badge.displayName = 'Badge';
