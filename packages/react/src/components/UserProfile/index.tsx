import React from 'react';
import { Avatar } from '../Avatar';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Text } from '../Text';

import * as S from './styles';

export type UserProfileProps = {
  user_name: string;
  user_email: string;
  user_imageURL?: string;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const UserProfile = ({
  user_name,
  user_email,
  user_imageURL,
  children,
  loading = false,
  className,
  ...props
}: UserProfileProps): JSX.Element => (
  <Dropdown.Menu
    className={className}
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
    align="start"
  >
    <Text
      size="sm"
      color="caption"
      className='bg-surface-color-background-disabled rounded-tl-sm rounded-tr-sm py-2 px-3 mg-[-8px]'

    >
      {user_email && user_email}
    </Text>
    <Dropdown.Separator className='mb-2' />
    {children}
  </Dropdown.Menu>
);

UserProfile.displayName = 'UserProfile';
