import { Text } from '../Text';

export type ShortcutProps = {
  shortcut: string;
};

export const Shortcut = ({
  shortcut,
  ...props
}: ShortcutProps): JSX.Element => (
  <Text
    size="xs"
    weight="medium"
    className="c-shortcut leading-2 h-auto rounded-sm bg-surface-color-background-hover px-1 pb-[1px] ml-auto"
    aria-label={shortcut}
    {...props}
  >
    {shortcut}
  </Text>
);

Shortcut.displayName = 'Shortcut';
