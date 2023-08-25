import { Story, Meta } from '@storybook/react';
import {
  Form,
  Select,
  SelectProps,
  Stack,
  SelectOption,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const PROJECTS = [
  {
    value: 'custom name',
    label: 'Custom name',
    slot: (
      <div className="h-2 w-2 rounded-circle bg-feedback-color-background-warning-enabled" />
    ),
  },
  {
    value: 'bit longer name',
    label: 'Bit longer name',
    slot: (
      <div className="h-2 w-2 rounded-circle bg-feedback-color-background-success-enabled" />
    ),
  },
  {
    value: 'much larger name to test',
    label: 'Much larger name to test',
    slot: (
      <div className="h-2 w-2 rounded-circle bg-feedback-color-background-danger-enabled" />
    ),
  },
  {
    value: 'regular',
    label: 'Regular',
    slot: (
      <div className="h-2 w-2 rounded-circle bg-feedback-color-background-info-subdued" />
    ),
  },
  {
    value: 'astro',
    label: 'Astro',
    slot: (
      <div className="h-2 w-2 rounded-circle bg-feedback-color-background-info-subdued" />
    ),
  },
] satisfies SelectOption[];

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Select an item',
    emptyMessage: 'No options found.',
    placeholder: 'Choose...',
    truncationLabel: 'projects selected',
    createOptionLabel: 'projects selected',
    variant: 'default',
    isMulti: false,
    disabled: false,
    loading: false,
    isClearable: true,
    isSearchable: true,
    isCreatable: false,
    options: PROJECTS,
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    emptyMessage: {
      table: {
        category: 'Text',
      },
    },
    truncationLabel: {
      table: {
        category: 'Text',
      },
    },
    createOptionLabel: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'table'],
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
    loading: {
      table: {
        category: 'State',
      },
    },
    isCreatable: {
      table: {
        category: 'Modifiers',
      },
    },
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    isSearchable: {
      table: {
        category: 'Modifiers',
      },
    },
    isClearable: {
      table: {
        category: 'Modifiers',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
    defaultOptions: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[350px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SelectProps>;

export const Default: Story<SelectProps> = (args) => {
  return (
    <Form>
      <Select {...args} name="1" />
      <Select {...args} name="2" icon="business" />
    </Form>
  );
};

export const isMulti = Default.bind({});
isMulti.args = {
  isMulti: true,
};

export const DefaultValues = Default.bind({});
DefaultValues.args = {
  defaultOptions: [PROJECTS[0]],
  isMulti: true,
};

export const TableVariant = Default.bind({});
TableVariant.args = {
  variant: 'table',
};

export const DisabledState = Default.bind({});
DisabledState.args = {
  disabled: true,
};

export const LoadingState = Default.bind({});
LoadingState.args = {
  loading: true,
};

export const HasError = Default.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const HasExtraAction = Default.bind({});
HasExtraAction.args = {
  onAction: () => alert('hello'),
  actionLabel: 'Edit',
  actionIcon: 'edit',
};
