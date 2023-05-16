import { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipProps,
  Stack,
  Button,
  Shortcut,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    children: <Button label="help" variant="icon" icon="help" />,
    content: (
      <>
        The <b>Evil Rabbit</b> Jumped over the Fence.
      </>
    ),
    direction: 'bottom',
  },
  argTypes: {
    content: {
      table: {
        category: 'Text',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    slot: {
      table: {
        category: 'Modifiers',
      },
    },
    direction: {
      table: {
        category: 'Modifiers',
      },
      options: ['left', 'right', 'top', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <Stack gap="8" align="center" justify="center" css={{ h: '100vh' }}>
        {Story()}
      </Stack>
    ),
  ],
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {};

export const WithSlot: StoryObj<TooltipProps> = {
  args: {
    slot: <Shortcut shortcut="cmd + p" />,
  },
};
