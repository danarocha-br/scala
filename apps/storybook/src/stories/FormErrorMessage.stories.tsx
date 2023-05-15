import { StoryObj, Meta } from '@storybook/react';
import { FormErrorMessage, FormErrorMessageProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/FormErrorMessage',
  component: FormErrorMessage,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: 'I am an error message.',
  },
  argTypes: {
    children: {
      table: {
        category: 'Text',
      },
    },
  },
} as Meta<FormErrorMessageProps>;

export const Default: StoryObj<FormErrorMessageProps> = {};
