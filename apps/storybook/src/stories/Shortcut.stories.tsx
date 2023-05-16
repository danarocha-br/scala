import { Meta, Story } from '@storybook/react';
import { Shortcut, ShortcutProps, Stack } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    shortcut: 'cmd + D',
  },
  argTypes: {
    shortcut: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '50vh', w: '50vw' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<ShortcutProps>;

export const Default: Story<ShortcutProps> = (args) => <Shortcut {...args} />;
