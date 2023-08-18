import { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Skeleton',
  component: Skeleton.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=17%3A17157',
    },
  },
  args: {
    children: <Skeleton.Item width={300} height={12} count={5} />,
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SkeletonProps>;

export const Example: StoryObj<SkeletonProps> = {};
