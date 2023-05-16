import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps, Stack } from '@e-scala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'options',
    legend: 'Choose an option',
    options: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
    ],
    // defaultValue: 'option1',
    variant: 'primary',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    legend: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    value: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
    onChange: {
      table: {
        category: 'Function',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'boxed'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
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
} as Meta<RadioGroupProps>;

export const Primary: Story<RadioGroupProps> = (args) => {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   return setInputValue(e.target.value);
  // };

  return (
    <Stack as="form" direction="column" fullWidth>
      <RadioGroup
        {...args}
        // value={inputValue}
        // onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};

export const Secondary = Primary.bind({});
Secondary.args = {
  variant: 'secondary',
  fullWidth: true,
};

export const SecondaryWithIcon = Primary.bind({});
SecondaryWithIcon.args = {
  variant: 'secondary',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const Boxed = Primary.bind({});
Boxed.args = {
  variant: 'boxed',
  fullWidth: true,
};

export const BoxedWithIcon = Primary.bind({});
BoxedWithIcon.args = {
  variant: 'boxed',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
    {
      value: 'development1',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const HasErrors = Primary.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
