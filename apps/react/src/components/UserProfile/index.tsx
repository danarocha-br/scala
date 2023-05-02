import React from 'react';
import { CSS } from '../../styles';
import { Avatar } from '../Avatar';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Text } from '../Text';

import * as S from './styles';

export type UserProfileProps = {
  user_name: string;
  user_email: string;
  user_imageURL: string;
  loading?: boolean;
  children: React.ReactNode;
  css?: CSS;
};

export const UserProfile = ({
  user_name,
  user_email,
  user_imageURL,
  children,
  loading = false,
  css,
  ...props
}: UserProfileProps): JSX.Element => (
  <Dropdown.Menu
    css={css}
    {...props}
    trigger={
      <S.Trigger aria-label="User profile">
        <Avatar
          username={user_name}
          imageURL={user_imageURL && user_imageURL}
          imageALT={user_name && user_name}
          showUsername
          loading={loading}
        />
        <Icon label="dropdown" name="chevronDown" size="sm" />
      </S.Trigger>
    }
  >
    <Text
      size="sm"
      color="caption"
      css={{
        py: '$spacing-2',
        px: '$spacing-3',
        mb: -8,
        backgroundColor: '$surface-color-background-disabled',
        borderTopLeftRadius: '$radii-sm',
        borderTopRightRadius: '$radii-sm',
      }}
    >
      {user_email && user_email}
    </Text>
    <Dropdown.Separator css={{ mb: '$spacing-2' }} />
    {children}
  </Dropdown.Menu>
);

UserProfile.displayName = 'UserProfile';
