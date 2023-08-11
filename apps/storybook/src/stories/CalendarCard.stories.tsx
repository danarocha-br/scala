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
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=571%3A2964&mode=design&t=6xBLjdHeoRhcrzFa-1',
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
        color: 'bg-[pink]',
      },
      {
        id: '2',
        title: 'Tech',
        color: 'bg-[green]',
      },
    ],
    editMenuItems: (
      <>
        <Dropdown.Item className="[&_svg]:-ml-1">
          <Icon name="edit" label="edit" size="sm" className="mr-2" />
          Mark as draft
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon name="copy" label="duplicate" size="sm" className="mr-2" />
          Duplicate
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon name="move" label="move" size="sm" className="mr-2" />
          Move
        </Dropdown.Item>
        <Dropdown.Item
          css={{
            '& svg': {
              ml: -4,
            },
          }}
        >
          <Icon name="trash" label="delete" size="sm" className="mr-2" />
          Delete
        </Dropdown.Item>
      </>
    ),
    status: 'published',
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          align="center"
          justify="center"
          fullWidth
          className="h-screen px-4 w-[50vw] bg-background-color-default"
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
