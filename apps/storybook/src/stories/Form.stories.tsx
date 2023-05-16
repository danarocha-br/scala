import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import {
  Form,
  FormProps,
  PasswordInput,
  Stack,
  TextInput,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 400 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<FormProps>;

export const Default: Story<FormProps> = (args) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form {...args}>
      <TextInput
        name="email"
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        name="name"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
};
