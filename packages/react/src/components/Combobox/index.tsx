import { Popover } from '../Popover';
import { Command } from '../Command';

export type ComboboxProps = {
  children: React.ReactNode;
  className?: string;
  emptyMessage: string;
  inputPlaceholder: string;
  trigger: React.ReactNode;
};

export const Combobox = ({
  children,
  emptyMessage,
  inputPlaceholder,
  trigger,
  className,
}: ComboboxProps) => {
  return (
    <Popover.Root trigger={trigger}>
      <Popover.Content unstyled className="flex flex-col justify-center">
        <Command.Root className={className}>
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
