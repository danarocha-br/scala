import { Story, Meta } from '@storybook/react';
import { PasswordInput, PasswordInputProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Password',
    name: 'password',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
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
        <Stack align="center" justify="center" css={{ h: '100vh', w: 350 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<PasswordInputProps>;

export const Default: Story<PasswordInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value);
  };

  return (
    <PasswordInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
