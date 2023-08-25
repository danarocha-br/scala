import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import {
  DialogProps,
  Root as DialogRoot,
  Content as DialogContent,
} from '@radix-ui/react-dialog';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import * as S from './styles';
import { Box } from '../Box';
import { Spinner } from '../Spinner';

type CommandRootProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive>;

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandRootProps
>(({ className = '', ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={S.commandContainer({ className })}
    {...props}
  />
));
CommandRoot.displayName = 'Root';

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <DialogRoot {...props}>
      <DialogContent className={S.commandDialog()}>
        <CommandRoot>{children}</CommandRoot>
      </DialogContent>
    </DialogRoot>
  );
};

type CommandInputProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input & { className?: string }>,
  CommandInputProps
>(({ className = '', ...props }, ref) => (
  <Stack
    align="center"
    gap="2"
    className={`border-b border-action-color-border-transparent-enabled p-2 ${className}`}
    cmdk-input-wrapper=""
  >
    <Icon name="search" label="search" size="xs" color="caption" />
    <CommandPrimitive.Input ref={ref} className={S.commandInput()} {...props} />
  </Stack>
));

CommandInput.displayName = 'Input';

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ ...props }, ref) => (
  <CommandPrimitive.List className={S.commandList()} ref={ref} {...props} />
));

CommandList.displayName = 'List';

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className={S.commandEmpty()} {...props} />
));

CommandEmpty.displayName = 'Empty';

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ ...props }, ref) => (
  <CommandPrimitive.Group ref={ref} className={S.commandGroup()} {...props} />
));

CommandGroup.displayName = 'Group';

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator & { className?: string }>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={S.commandSeparator({ className })}
    {...props}
  />
));
CommandSeparator.displayName = 'Separator';

type CommandItemProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className = '', ...props }, ref) => (
  <CommandPrimitive.Item
    className={S.commandItem({ className })}
    ref={ref}
    {...props}
  />
));

CommandItem.displayName = 'Item';

type CommandLoadingProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>;

const CommandLoading = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Loading>,
  CommandLoadingProps
>(({ ...props }, ref) => (
  <CommandPrimitive.Loading ref={ref} {...props}>
    <Stack align="center" justify="center" fullWidth className="py-3">
      <Spinner size="sm" />
    </Stack>
  </CommandPrimitive.Loading>
));

CommandLoading.displayName = 'Loading';

type CommandFooterProps = {
  className?: string;
  children?: React.ReactNode;
};

const CommandFooter = ({
  className = '',
  children,
  ...props
}: CommandFooterProps) => (
  <Stack
    as="footer"
    align="center"
    justify="between"
    fullWidth
    className={S.commandFooter({ className })}
    {...props}
  >
    {children ? (
      children
    ) : (
      <>
        <Stack as="span" align="center" gap="1">
          <Box className={S.commandFooterIcons()}>↑</Box>
          <Box className={S.commandFooterIcons()}>↓</Box>
          to navigate
        </Stack>
        {/* <Stack as="span" align="center" gap="1">
          <Box className={S.commandFooterIcons()}>⏎</Box>
          to select
        </Stack>
        <Stack as="span" align="center" gap="1">
          <Box className={S.commandFooterIcons()}>⎋</Box>
          to close
        </Stack> */}
      </>
    )}
  </Stack>
);

CommandFooter.displayName = 'Footer';

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Loading: CommandLoading,
  Separator: CommandSeparator,
  Footer: CommandFooter,
};
