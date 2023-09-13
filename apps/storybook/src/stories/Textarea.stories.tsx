import { Meta, Story } from '@storybook/react';
import { Stack, Textarea, TextareaProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Description',
    name: 'description',
    placeholder: 'Be descriptive...',
    cols: 1,
    rows: 5,
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
    cols: {
      table: {
        category: 'Modifiers',
      },
    },
    rows: {
      table: {
        category: 'Modifiers',
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
} as Meta<TextareaProps>;

export const Default: Story<TextareaProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Textarea {...args} value={inputValue} onChange={(e) => handleChange(e)} />
  );
};
