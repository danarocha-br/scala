import { Text } from '../Text';

export type ShortcutProps = {
  shortcut: string;
};

export const Shortcut = ({
  shortcut,
  ...props
}: ShortcutProps): JSX.Element => (
  <Text
    className="c-shortcut"
    size="xs"
    weight="medium"
    css={{
      px: '$spacing-1',
      pb: 1,
      bg: '$surface-color-background-hover',
      borderRadius: '$radii-sm',
      lineHeight: '$line-height-2',
      h: 'auto',
    }}
    aria-label={shortcut}
    {...props}
  >
    {shortcut}
  </Text>
);

Shortcut.displayName = 'Shortcut';
