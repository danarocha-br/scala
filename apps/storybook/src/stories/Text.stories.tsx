import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Grid } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    size: 'md',
    align: 'left',
    color: 'body',
    weight: 'regular',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. ',
  },
  argTypes: {
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
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
        'body-lighter',
        'caption',
        'success',
        'danger',
        'warning',
        'on-dark',
        'on-light',
        'current',
      ],
      control: {
        type: 'select',
      },
    },
    weight: {
      table: {
        category: 'Modifiers',
      },
      options: ['light', 'regular', 'medium', 'semibold'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      table: {
        category: 'Modifiers',
      },
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    leading: {
      table: {
        category: 'Modifiers',
      },
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      control: {
        type: 'select',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    as: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Grid cols="2" rows="9" align="center" css={{ maxWidth: 600, py: '$6' }}>
    <Text size="sm" color="caption">
      4xl
    </Text>
    <Text {...args} size="4xl" />
    <Text size="sm" color="caption">
      3xl
    </Text>
    <Text {...args} size="3xl" />
    <Text size="sm" color="caption">
      2xl
    </Text>
    <Text {...args} size="2xl" />
    <Text size="sm" color="caption">
      xl
    </Text>
    <Text {...args} size="xl" />
    <Text size="sm" color="caption">
      lg
    </Text>
    <Text {...args} size="lg" />
    <Text size="sm" color="caption">
      md
    </Text>
    <Text {...args} size="md" />
    <Text size="sm" color="caption">
      sm
    </Text>
    <Text {...args} size="sm" />
    <Text size="sm" color="caption">
      xs
    </Text>
    <Text {...args} size="xs" />
    <Text size="sm" color="caption">
      xxs
    </Text>
    <Text {...args} size="xxs" />
  </Grid>
);

export const AllScales = Template.bind({});

export const CustomTag: Story<TextProps> = (args) => (
  <Text {...args}>Text</Text>
);
CustomTag.args = {
  as: 'strong',
};
