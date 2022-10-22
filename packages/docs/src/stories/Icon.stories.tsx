import { Story, Meta } from '@storybook/react';
import { Grid, Icon, IconProps, iconPath, Text, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const icons = Object.keys(iconPath);

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786',
    },
  },
  args: {
    name: 'plus',
    color: 'subtext',
    label: 'add',
    size: 'md',
  },
  argTypes: {
    name: {
      table: {
        category: 'Modifiers',
      },
      options: [...icons],
      control: {
        type: 'select',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'body',
        'subtext',
        'caption',
        'success',
        'danger',
        'warning',
        'on-interactive',
        'inverted',
        'current',
      ],
      control: {
        type: 'select',
      },
    },
    label: {
      table: {
        category: 'Text',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IconProps>;

export const IconSet: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="6"
    align="stretch"
    justify="between"
    gap="3"
    css={{ w: '$full', p: '$4' }}
  >
    {icons.map((icon) => (
      <Stack
        key={icon}
        direction="column"
        align="center"
        gap="2"
        css={{
          bg: '$surface-base-subdued',
          p: '$2',
          borderRadius: '$sm',
        }}
      >
        <Icon {...args} name={icon} />
        <Text
          as="p"
          size="xs"
          color="caption"
          css={{ bg: '$surface-base-default', w: '100%', textAlign: 'center' }}
        >
          {icon}
        </Text>
      </Stack>
    ))}
  </Grid>
);

export const SingleIcon: Story<IconProps> = (args) => <Icon {...args} />;
SingleIcon.parameters = {
  layout: 'centered',
};
