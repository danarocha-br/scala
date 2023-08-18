import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Stack, TextInput, TextInputProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from '@storybook/addons';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
    errors: undefined,
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
    actionLabel: {
      table: {
        category: 'Text',
      },
    },
    type: {
      table: {
        category: 'Modifiers',
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
    hasAction: {
      table: {
        category: 'Modifiers',
      },
    },
    actionIcon: {
      table: {
        category: 'Modifiers',
      },
    },
    onAction: {
      table: {
        category: 'Function',
      },
    },
    errors: {
      table: {
        category: 'Modifiers',
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
    readOnly: {
      table: {
        category: 'State',
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
} as Meta<TextInputProps>;

export const OverviewDefaultVariant: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack as="form" direction="column" fullWidth>
      <TextInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<TextInputProps> = (args) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue1(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue1}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<TextInputProps> = (args) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue1(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue1}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        hasAction
        value={inputValue3}
        onChange={(e) => setInputValue3(e.target.value)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const Loading = States.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = States.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = States.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const HasErrors = OverviewDefaultVariant.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const Default: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <TextInput {...args} value={inputValue} onChange={(e) => handleChange(e)} />
  );
};
