import React from 'react';
import { CSS } from '../../styles';

import { Stack } from '../Stack';
import { Text } from '../Text';
import { Skeleton } from '../Skeleton';

import * as S from './styles';
import { Icon } from '../Icon';

export type AvatarProps = {
  css?: CSS;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'circle' | 'square';
  imageURL?: string;
  imageALT?: string;
  loading?: boolean;
  showUsername?: boolean;
  username: string;
  bgColor?: string;
  initialsColor?: string;
};

function getInitials(name: string) {
  return (
    name &&
    name
      .trim()
      .split(' ')
      .reduce((initial, name) => initial + name[0], '')
      .slice(0, 2)
      .toUpperCase()
  );
}

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
  css,
  ...props
}: AvatarProps): JSX.Element => (
  <Stack className="avatar" gap={size === 'md' ? '2' : '3'} align="center">
    <S.Container
      size={size}
      variant={variant}
      css={{ background: bgColor ? bgColor : '$brand-color-primary', css }}
      {...props}
    >
      {Boolean(imageURL) && !loading && (
        <S.Image src={imageURL} alt={imageALT || 'Joe Doe'} />
      )}
      <S.Fallback
        delayMs={600}
        loading={loading}
        css={{
          background: bgColor ? bgColor : '$brand-color-primary',
          color: initialsColor || '$text-color-on-dark',
        }}
      >
        {loading ? (
          <Icon name="user" label="user is loading" color="on-dark" />
        ) : (
          getInitials(username)
        )}
      </S.Fallback>
    </S.Container>

    {showUsername && !loading && (
      <Text
        weight="medium"
        className="avatar__username"
        css={{ transition: '$base', transform: 'scale(0.95)' }}
      >
        {username}
      </Text>
    )}

    {loading && (
      <Skeleton.Root>
        <Skeleton.Item width={100} height={12} count={1} />
      </Skeleton.Root>
    )}
  </Stack>
);

Avatar.displayName = 'Avatar';
