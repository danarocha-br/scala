import { StoryObj, Meta } from '@storybook/react';
import { CalendarCard, CalendarCardProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/CalendarCard',
  component: CalendarCard,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    user: 'Dana Rocha',
    title: 'Setup account and permissions',
    dueDate: 'Apr 23',
    checklist: [
      {
        id: '1',
        title: 'Setup account',
        isChecked: false,
      },
      {
        id: '2',
        title: 'Setup account',
        isChecked: false,
      },
    ],
    tags: [
      {
        id: '1',
        title: 'Onboarding',
        color: 'pink',
      },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          align="center"
          justify="center"
          fullWidth
          css={{
            h: '100vh',
            px: '$spacing-4',
            w: '50vw',
            background: '$background-default',
          }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CalendarCardProps>;

export const Default: StoryObj<CalendarCardProps> = {};
