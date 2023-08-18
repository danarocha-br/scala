import { StoryObj, Meta } from '@storybook/react';
import { Command, Icon, Shortcut, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Command',
  component: Command.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    className: 'min-w-[400px]',
    children: (
      <>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Icon name="calendar" label="Calendar" /> Calendar
              <Shortcut shortcut="cmd D" />
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <Icon name="user" label="Calendar" />
              Profile
            </Command.Item>
            <Command.Item disabled>
              <Icon name="settings" label="Calendar" /> Settings
            </Command.Item>
          </Command.Group>
        </Command.List>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" fullWidth className="px-4">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
