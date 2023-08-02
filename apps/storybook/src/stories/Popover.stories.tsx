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
  },
} as Meta;

export const Default: StoryObj = {};
