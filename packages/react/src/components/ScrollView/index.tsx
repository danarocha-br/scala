import React from 'react';
import {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
  Corner,
} from '@radix-ui/react-scroll-area';

import * as S from './styles';

export type ScrollViewProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollView = ({
  children,
  className,
  ...props
}: ScrollViewProps): JSX.Element => (
  <Root {...props} className={`c-scrollarea ${S.scrollArea({ className })}`}>
    <Viewport className={S.scrollViewport()}>{children}</Viewport>

    <Scrollbar orientation="vertical" className={S.scrollBar()}>
      <Thumb className={S.srollThumb()} />
    </Scrollbar>
    <Scrollbar orientation="horizontal" className={S.scrollBar()}>
      <Thumb className={S.srollThumb()} />
    </Scrollbar>
    <Corner className={S.scrollCorner()} />
  </Root>
);

ScrollView.displayName = 'ScrollView';
