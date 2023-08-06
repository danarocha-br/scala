import React from 'react';

import { iconPath, Icon } from '../Icon';
import { Stack } from '../Stack';
import { Box } from '../Box';
import * as S from './styles';

export type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  icon?: keyof typeof iconPath;
  variant?: 'info' | 'success' | 'danger' | 'warning';
  className?: string;
};

export const Callout = ({
  title,
  children,
  icon,
  variant = 'info',
}: CalloutProps): JSX.Element => (
  <Box className={S.container()}>
    <Box className={S.marker({ variant })} />
    <Stack gap="2" direction="column" fullWidth>
      {Boolean(title) && (
        <Box as="header" className={S.header({ variant })}>
          {!!icon && (
            <Icon
              label={(Boolean(title) && title) || 'icon'}
              name={icon}
              color="current"
              className='left-3 mr-[-8px] relative'
            />
          )}
          <h5>{title}</h5>
        </Box>
      )}
      <Box as='span' className="callout__content">{children}</Box>
    </Stack>
  </Box>
);
Callout.displayName = 'Callout';
