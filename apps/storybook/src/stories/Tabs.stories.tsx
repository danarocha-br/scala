import { StoryObj, Meta } from '@storybook/react';
import { Tabs, TabsProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    defaultValue: 1,
    children: (
      <>
        <Tabs.List>
          <Tabs.Item label="Item 1" value={1} />
          <Tabs.Item label="Item 2" value={2} />
        </Tabs.List>
        <Tabs.Content value={1}>Content 1</Tabs.Content>
        <Tabs.Content value={2}>Content 2</Tabs.Content>
      </>
    ),
  },
} as Meta<TabsProps>;

export const Default: StoryObj<TabsProps> = {};
