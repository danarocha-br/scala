import ReactSkeleton, {
  SkeletonTheme,
  SkeletonProps as ReactSkeletonProps,
} from 'react-loading-skeleton';
import { theme } from '../../styles';

export type SkeletonProps = {
  children: React.ReactNode;
};

const SkeletonItem = (props: ReactSkeletonProps) => (
  //@ts-ignore
  <ReactSkeleton style={{ marginBottom: theme.space[3] }} {...props} />
);
SkeletonItem.displayName = 'Skeleton.Item';

const SkeletonRoot = ({ children, ...props }: SkeletonProps) => (
  <SkeletonTheme
    //@ts-ignore
    baseColor={theme.colors['loading-default']}
    //@ts-ignore
    highlightColor={theme.colors['loading-subdued']}
    borderRadius="999px"
    {...props}
  >
    {children}
  </SkeletonTheme>
);
SkeletonRoot.displayName = 'Skeleton.Root';

export const Skeleton = { Root: SkeletonRoot, Item: SkeletonItem };