import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Checkbox',
  component: Checkbox.Item,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    variant: 'regular',
    name: 'option1',
    label: 'Accept terms and conditions',
    disabled: false,
  },
  argTypes: {
    name: {
      table: {
        category: 'Text',
      },
    },
    defaultChecked: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['regular', 'task'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
      },
    },

    disabled: {
      table: {
        category: 'State',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 600 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Regular: Story<CheckboxProps> = (args) => {
  return <Checkbox.Item {...args} />;
};

export const RegularWithLegend: Story<CheckboxProps> = (args) => {
  return (
    <Checkbox.Fieldset legend="Choose your options">
      <Checkbox.Item {...args} name="1" />
      <Checkbox.Item {...args} name="2" />
    </Checkbox.Fieldset>
  );
};

export const Task = Regular.bind({});
Task.args = {
  variant: 'task',
};

export const HasErrors = Regular.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
