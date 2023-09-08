import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { Box } from '../Box';
import * as S from './styles';

export type SkeletonProps = {
  children: React.ReactNode;
} & VariantProps<typeof S.root>;

export type SkeletonItemProps = {
  width?: number | string;
  height?: number | string;
  count?: number;
} & VariantProps<typeof S.item>;

/**
 * Renders a skeleton item.
 *
 * @param {SkeletonItemProps} props - The props for the skeleton item.
 * @returns {JSX.Element} The rendered skeleton item.
 */
const SkeletonItem = ({
  width = '100%',
  height = 16,
  count = 1,
  ...props
}: SkeletonItemProps): JSX.Element => {
  const countArray = Array.from({ length: count });

  return (
    <>
      {countArray.map((_, index) => (
        <Box
          key={index}
          className={S.item()}
          style={{ width, height }}
          {...props}
        />
      ))}
    </>
  );
};

SkeletonItem.displayName = 'Skeleton.Item';

type SkeletonRootProps = {
  children: React.ReactNode;
  loading?: boolean;
} & SkeletonProps;

/**
 * Renders the skeleton root component.
 * @param children - The content to be rendered inside the skeleton root.
 * @param loading - Pass it for accessibility.
 * @returns The skeleton root component.
 */

const SkeletonRoot: React.FC<SkeletonRootProps> = ({
  children,
  loading = false,
  ...props
}) => {
  return (
    <Box className={S.root()} aria-busy={loading ? true : false} {...props}>
      {children}
    </Box>
  );
};
SkeletonRoot.displayName = 'Skeleton.Root';

export const Skeleton = { Root: SkeletonRoot, Item: SkeletonItem };
