import { CSS } from '../../styles';

import * as S from './styles';

export type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  css?: CSS;
};

export const Separator = ({
  orientation,
  css,
  ...props
}: SeparatorProps): JSX.Element => (
  <S.Container css={css} orientation={orientation} {...props} />
);

Separator.displayName = 'Separator';
