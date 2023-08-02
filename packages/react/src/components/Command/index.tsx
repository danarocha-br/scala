import * as React from 'react';
import {
  DialogProps,
  Root as DialogRoot,
  Content as DialogContent,
} from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Icon } from '../Icon';
import { Stack } from '../Stack';

import * as S from './styles';
import { CSS } from '../../styles';

type CommandRootProps = {
  css?: CSS;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive>;

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandRootProps
>(({ css, ...props }, ref) => (
  <S.CommandContainer css={css}>
    <CommandPrimitive ref={ref} {...props} />
  </S.CommandContainer>
));
CommandRoot.displayName = 'Root';

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <DialogRoot {...props}>
      <DialogContent className="cmdk-dialog">
        <CommandRoot>{children}</CommandRoot>
      </DialogContent>
    </DialogRoot>
  );
};

type CommandInputProps = {
  css?: CSS;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input & { css?: CSS }>,
  CommandInputProps
>(({ css, ...props }, ref) => (
  <Stack
    align="center"
    gap="2"
    css={{
      borderBottom: '1px solid',
      borderColor: '$action-color-border-transparent-pressed',
      px: '$spacing-2',
      css,
    }}
    cmdk-input-wrapper=""
  >
    <Icon name="search" label="search" size="xs" color="caption" />
    <CommandPrimitive.Input ref={ref} className="command__input" {...props} />
  </Stack>
));

CommandInput.displayName = 'Input';

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ ...props }, ref) => <CommandPrimitive.List ref={ref} {...props} />);

CommandList.displayName = 'List';

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} {...props} />);

CommandEmpty.displayName = 'Empty';

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ ...props }, ref) => <CommandPrimitive.Group ref={ref} {...props} />);

CommandGroup.displayName = 'Group';

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ ...props }, ref) => <CommandPrimitive.Separator ref={ref} {...props} />);
CommandSeparator.displayName = 'Separator';

type CommandItemProps = {
  css?: CSS;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ css, ...props }, ref) => (
  <S.CommmandItem css={css} ref={ref} {...props} />
));

CommandItem.displayName = 'Item';

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Separator: CommandSeparator,
};
