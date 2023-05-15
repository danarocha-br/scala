import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    username: 'Joe Smith',
    size: 'md',
    variant: 'circle',
    imageURL: 'https://source.unsplash.com/ew_Ou6oiQ2c',
    imageALT: 'user avatar',
    loading: false,
    showUsername: false,
  },
  argTypes: {
    username: {
      table: {
        category: 'Text',
      },
    },
    imageALT: {
      table: {
        category: 'Text',
      },
    },
    imageURL: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['circle', 'square'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    showUsername: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          gap="8"
          align="center"
          justify="center"
          css={{ h: '100vh', px: 200 }}
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<AvatarProps>;

export const Sizes: Story<AvatarProps> = (args) => (
  <>
    <Avatar {...args} />
    <Avatar {...args} size="lg" />
  </>
);

export const WithFallback = Sizes.bind({});
WithFallback.args = {
  imageURL: undefined,
};

export const Square = Sizes.bind({});
Square.args = {
  variant: 'square',
  imageURL: undefined,
};

export const WithUsername = Sizes.bind({});
WithUsername.args = {
  imageURL: undefined,
  showUsername: true,
};
