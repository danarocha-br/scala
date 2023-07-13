import { CSS } from '../../styles';

import * as S from './styles';

export type CardProps = {
  as?: React.ElementType<unknown> | any;
  css?: CSS;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

export const Card = ({
  children,
  css,
  as,
  ...props
}: CardProps): JSX.Element => (
  <S.Container as={as} css={css} {...props}>
    {children}
  </S.Container>
);

Card.displayName = 'Card';
