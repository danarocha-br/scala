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
  className = '',
}: CalloutProps): JSX.Element => (
  <Box className={S.container({ className })}>
    <Box className={S.marker({ variant })} />
    <Stack gap="2" direction="column" fullWidth>
      {Boolean(title) && (
        <Box as="header" className={S.header({ variant })}>
          {!!icon && (
            <Icon
              label={(Boolean(title) && title) || 'icon'}
              name={icon}
              color="current"
              size="sm"
              className="relative left-3 mr-[-8px]"
            />
          )}
          <h5 className="px-4 py-2">{title}</h5>
        </Box>
      )}
      <Box as="span" className="callout__content pb-2 pl-4">
        {children}
      </Box>
    </Stack>
  </Box>
);
Callout.displayName = 'Callout';
