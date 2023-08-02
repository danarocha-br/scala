import { CSS } from '../../styles';

import { Popover } from '../Popover';
import { Command } from '../Command';

export type ComboboxProps = {
  children: React.ReactNode;
  css?: CSS;
  emptyMessage: string;
  inputPlaceholder: string;
  trigger: React.ReactNode;
};

export const Combobox = ({
  children,
  emptyMessage,
  inputPlaceholder,
  trigger,
  css,
}: ComboboxProps) => {
  return (
    <Popover.Root trigger={trigger}>
      <Popover.Content
        css={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Command.Root css={css}>
          <Command.Input placeholder={inputPlaceholder} />

          <Command.List>
            <Command.Empty>{emptyMessage}</Command.Empty>
            {children}
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
};

Combobox.displayName = 'Combobox';
