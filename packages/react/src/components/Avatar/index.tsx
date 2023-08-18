import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { VariantProps } from 'class-variance-authority';

import { Stack } from '../Stack';
import { Text } from '../Text';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

import * as S from './styles';

export type AvatarProps = {
  className?: string;
  username: string;
  imageURL?: string;
  imageALT?: string;
  loading?: boolean;
  showUsername?: boolean;
  bgColor?: string;
  initialsColor?: string;
} & VariantProps<typeof S.container> &
  VariantProps<typeof S.fallback>;

function getInitials(name: string): string {
  if (!name) {
    return '';
  }

  const trimmedName = name.trim();
  const names = trimmedName.split(' ');
  const initials = names.reduce((initial, name) => initial + name[0], '');
  const firstTwoInitials = initials.slice(0, 2);
  const uppercaseInitials = firstTwoInitials.toUpperCase();

  return uppercaseInitials;
}

/**
 * Renders an avatar component with customizable options.
 *
 * @param {string} [props.size='md'] - The size of the avatar. Default is 'md'.
 * @param {string} [props.variant='circle'] - The variant of the avatar. Default is 'circle'.
 * @param {string} [props.bgColor] - The background color of the avatar.
 * @param {string} [props.imageURL] - The URL of the image to be displayed in the avatar.
 * @param {string} [props.imageALT] - The alternative text for the avatar image.
 * @param {boolean} [props.loading=false] - Indicates if the avatar is in a loading state. Default is false.
 * @param {boolean} [props.showUsername=false] - Indicates if the username should be displayed. Default is false.
 * @param {string} [props.initialsColor] - The color of the user's initials in the avatar.
 * @param {string} [props.username] - The username name or initials to be displayed.
 * @param {string} [props.className] - Additional CSS classes for the avatar.
 * @returns {JSX.Element} The rendered avatar component.
 */
export const Avatar = ({
  size = 'md',
  variant = 'circle',
  bgColor,
  imageURL,
  imageALT,
  loading = false,
  showUsername = false,
  initialsColor,
  username,
  className,
  ...props
}: AvatarProps): JSX.Element => (
  <Stack className="avatar" gap={size === 'md' ? '2' : '3'} align="center">
    <AvatarPrimitive.Root
      className={`${bgColor || 'bg-brand-color-primary'} ${S.container({
        variant,
        size,
        className,
      })}`}
      {...props}
    >
      {Boolean(imageURL) && !loading && (
        <AvatarPrimitive.Image
          className={S.image()}
          src={imageURL}
          alt={imageALT || 'Joe Doe'}
        />
      )}
      <AvatarPrimitive.Fallback
        delayMs={600}
        className={`${bgColor || 'bg-brand-color-primary'} ${
          initialsColor || 'text-white'
        } ${S.fallback({
          loading,
        })}`}
      >
        {loading ? (
          <Icon name="user" label="user is loading" color="on-dark" />
        ) : (
          getInitials(username)
        )}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>

    {showUsername && !loading && (
      <Text
        weight="medium"
        leading='1'
        className="avatar__username transition-all scale-95"
      >
        {username}
      </Text>
    )}

    {loading && showUsername && (
      <Skeleton.Root>
        <Skeleton.Item width={100} height={12} count={1} />
      </Skeleton.Root>
    )}
  </Stack>
);

Avatar.displayName = 'Avatar';
