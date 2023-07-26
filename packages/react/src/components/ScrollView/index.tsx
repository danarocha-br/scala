import React from 'react';
import { CSS } from '../../styles';

import * as S from './styles';

export type ScrollViewProps = {
  children: React.ReactNode;
  css?: CSS;
};

export const ScrollView = ({
  children,
  css,
  ...props
}: ScrollViewProps): JSX.Element => (
  <S.ScrollArea css={css} {...props} className="c-scrollarea">
    <S.ScrollViewport>{children}</S.ScrollViewport>

    <S.ScrollBar orientation="vertical">
      <S.SrollThumb />
    </S.ScrollBar>
    <S.ScrollBar orientation="horizontal">
      <S.SrollThumb />
    </S.ScrollBar>
    <S.ScrollCorner />
  </S.ScrollArea>
);

ScrollView.displayName = 'ScrollView';
