import { StoryObj, Meta } from '@storybook/react';
import { Button, Dropdown, DropdownProps, Icon, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Dropdown',
  component: Dropdown.Menu,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=48%3A8385',
    },
  },
  args: {
    children: (
      <>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </>
    ),
    trigger: <Button label="Click me" />,
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    trigger: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-full px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {};
export const WithSlot: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/">
            Logout <Dropdown.RightSlot>ESC</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
      </>
    ),
  },
};
export const WithIcons: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item>
          <Icon name="settings" label="settings" className="mr-2" />
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <Icon name="user" label="profile" className="mr-2" />
          <a href="/">
            Profile <Dropdown.RightSlot>⌘ P</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
      </>
    ),
  },
};
export const ItemDisabled: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item disabled>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
      </>
    ),
  },
};
