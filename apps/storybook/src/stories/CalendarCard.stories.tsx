import { StoryObj, Meta } from '@storybook/react';
import {
  CalendarCard,
  CalendarCardProps,
  Stack,
  Dropdown,
  Icon,
} from '@compasso/scala';
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
        status: 'done',
      },
      {
        id: '2',
        title: 'Setup account',
        status: 'todo',
      },
    ],
    tags: [
      {
        id: '1',
        title: 'Onboarding',
        color: 'pink',
      },
      {
        id: '1',
        title: 'Tech',
        color: 'green',
      },
    ],
    editMenuItems: (
      <>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon name="edit" label="edit" size="sm" css={{ mr: '$spacing-2' }} />
          Mark as draft
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon
            name="copy"
            label="duplicate"
            size="sm"
            css={{ mr: '$spacing-2' }}
          />
          Duplicate
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon name="move" label="move" size="sm" css={{ mr: '$spacing-2' }} />
          Move
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon
            name="trash"
            label="delete"
            size="sm"
            css={{ mr: '$spacing-2' }}
          />
          Delete
        </Dropdown.Item>
      </>
    ),
    status: 'enabled',
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
export const Draft: StoryObj<CalendarCardProps> = {
  args: {
    status: 'draft',
    draftText: 'Draft',
  },
};
