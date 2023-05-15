import React from 'react';
import { CSS, styled } from '../../styles';

export type BoxProps = {
  as?: React.ElementType;
  css?: CSS;
} & React.ComponentProps<typeof Box>;

export const Box = styled('div', {
  boxSizing: 'border-box',
});

Box.displayName = 'Box';
