import React from 'react';
import ReactSkeleton, {
  SkeletonTheme,
  SkeletonProps as ReactSkeletonProps,
} from 'react-loading-skeleton';
//@ts-ignore
import { theme } from '../../../tailwind.config.js';

export type SkeletonProps = {
  children: React.ReactNode;
};

const SkeletonItem = (props: ReactSkeletonProps) => (
  //@ts-ignore
  <ReactSkeleton {...props} />
);
SkeletonItem.displayName = 'Skeleton.Item';

/**
 * Renders a SkeletonRoot component with the provided children and props.
 *
 * @param {SkeletonProps} children - The children elements to be rendered inside the SkeletonRoot component.
 * @param {SkeletonProps} props - Additional props to be passed to the SkeletonRoot component.
 * @return {JSX.Element} The rendered SkeletonRoot component.
 */
const SkeletonRoot = ({ children, ...props }: SkeletonProps): JSX.Element => (
  <SkeletonTheme
    baseColor={theme.colors['loading-color-background']}
    highlightColor={theme.colors['loading-color-background-subdued']}
    borderRadius="999px"
    {...props}
  >
    {children}
  </SkeletonTheme>
);
SkeletonRoot.displayName = 'Skeleton.Root';

export const Skeleton = { Root: SkeletonRoot, Item: SkeletonItem };
