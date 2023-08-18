import React from 'react';
import { Button } from '@ariakit/react';

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

/**
 * Renders the user profile component.
 *
 * @param {string} user_name - The name of the user.
 * @param {string} user_email - The email of the user.
 * @param {string} user_imageURL - The URL of the user's profile image.
 * @param {ReactNode} children - The children components.
 * @param {boolean} loading - Flag indicating whether the component is in a loading state.
 * @param {string} className - The CSS class name for the component.
 * @returns {JSX.Element} The rendered UserProfile component.
 */
export const UserProfile = ({
  user_name,
  user_email,
  user_imageURL,
  children,
  loading = false,
  className,
  ...props
}: UserProfileProps): JSX.Element => {
  const triggerButtonLabel = 'User profile';
  const avatarImageALT = user_name || '';
  const textContent = user_email || '';

  return (
    <Dropdown.Menu
      className={className}
      {...props}
      trigger={
        <Button className={S.trigger()} aria-label={triggerButtonLabel}>
          <Avatar
            username={user_name}
            imageURL={user_imageURL}
            imageALT={avatarImageALT}
            showUsername
            loading={loading}
          />
          <Icon label="dropdown" name="chevronDown" size="sm" />
        </Button>
      }
      align="start"
    >
      <Text
        size="sm"
        color="caption"
        className="mb-[-8px] rounded-tl-sm rounded-tr-sm bg-surface-color-background-disabled px-3 py-2"
      >
        {textContent}
      </Text>
      <Dropdown.Separator className="mb-2" />
      {children}
    </Dropdown.Menu>
  );
};

UserProfile.displayName = 'UserProfile';
