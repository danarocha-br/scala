import { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps, ToastProvider } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Toast',
  component: Toast.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    directionX: 'right',
    directionY: 'bottom',
    messages: [
      {
        id: '1',
        title: 'An error occurred.',
        description:
          'Something went wrong while logging you in. Please try again.',
      },
      {
        id: '2',
        title: 'Success.',
        variant: 'success',
        description: 'All good.',
      },
      {
        id: '3',
        title: 'Danger.',
        variant: 'danger',
        description: 'Not good.',
      },
      {
        id: '4',
        title: 'Warning.',
        variant: 'warning',
        description: 'This is a warning.',
      },
      {
        id: '6',
        title: 'Neutral.',
        variant: 'neutral',
        description: 'This is a neutral message.',
      },
      {
        id: '5',
        title: 'I have no description',
      },
    ],
    allowRemoveToast: false,
  },
  argTypes: {
    directionX: {
      table: {
        category: 'Mofidiers',
      },
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    directionY: {
      table: {
        category: 'Mofidiers',
      },
      options: ['top', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
    allowRemoveToast: {
      table: {
        category: 'Mofidiers',
      },
    },
    messages: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} as Meta<ToastProps>;

export const Default: StoryObj<ToastProps> = {};
