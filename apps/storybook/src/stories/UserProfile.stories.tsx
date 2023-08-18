import { StoryObj, Meta } from '@storybook/react';
import {
  Dropdown,
  Icon,
  Stack,
  UserProfile,
  UserProfileProps,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=48%3A5156',
    },
  },
  args: {
    user_name: 'Dana Rocha',
    user_email: 'hello@danarocha.com',
    loading: false,
    children: (
      <>
        <Dropdown.Item textValue="Configurações">
          <Icon name="settings" label="settings" className="mr-2" />
          <a href="/">
            Configurações <Dropdown.RightSlot>⌘ C</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item textValue="Preferências">
          <Icon name="settings" label="settings" className="mr-2" />
          <a href="/">
            Preferências <Dropdown.RightSlot>⌘ P</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item textValue="Sair">
          <a href="/">Sair</a>
        </Dropdown.Item>
      </>
    ),
  },
  argTypes: {
    user_name: {
      table: {
        category: 'Text',
      },
    },
    user_email: {
      table: {
        category: 'Text',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
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
} as Meta<UserProfileProps>;

export const Default: StoryObj<UserProfileProps> = {};
