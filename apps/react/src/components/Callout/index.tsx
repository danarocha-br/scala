import React from 'react';
import { CSS } from '../../styles';

import { iconPath, Icon } from '../Icon';
import { Stack } from '../Stack';

import * as S from './styles';

export type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  icon?: keyof typeof iconPath;
  variant?: 'info' | 'success' | 'danger' | 'warning';
  css?: CSS;
};

export const Callout = ({
  title,
  children,
  icon,
  variant = 'info',
}: CalloutProps): JSX.Element => (
  <S.Container>
    <S.Marker variant={variant} />
    <Stack gap="2" direction="column" fullWidth>
      {Boolean(title) && (
        <S.Header variant={variant}>
          {!!icon && (
            <Icon
              label={(Boolean(title) && title) || 'icon'}
              name={icon}
              color="current"
              css={{ left: '$spacing-3', mr: -8, position: 'relative' }}
            />
          )}
          <h5>{title}</h5>
        </S.Header>
      )}
      <span className="callout__content">{children}</span>
    </Stack>
  </S.Container>
);
Callout.displayName = 'Callout';
