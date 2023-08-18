import { StoryObj, Meta } from '@storybook/react';
import { Button, Popover } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Popover',
  component: Popover.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    trigger: <Button label="Open popover"></Button>,
    children: (
      <>
        <Popover.Content>
          <div>hey</div>
        </Popover.Content>
      </>
    ),
    unstyled: false,
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
    unstyled: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
