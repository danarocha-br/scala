import { Text } from '../Text';

export type ShortcutProps = {
  shortcut: string;
  className?: string;
};

export const Shortcut = ({
  shortcut,
  className = '',
  ...props
}: ShortcutProps): JSX.Element => (
  <Text
    size="xs"
    weight="medium"
    className={`c-shortcut leading-2 ml-auto h-auto rounded-sm bg-surface-color-background-hover px-1 pb-[1px] dark:bg-surface-color-background-subdued ${className}`}
    aria-label={shortcut}
    {...props}
  >
    {shortcut}
  </Text>
);

Shortcut.displayName = 'Shortcut';
