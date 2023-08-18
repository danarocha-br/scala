import { Story, Meta } from '@storybook/react';
import { Box, Icon, SelectMenu, SelectMenuProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/SelectMenu',
  component: SelectMenu.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Status',
    defaultValue: 'invoiced',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

type CustomSelectProps = {
  label: string;
  color: string;
  value: string;
  disabled?: boolean;
};

const CustomSelectItem = ({
  value,
  color,
  label,
  disabled = false,
}: CustomSelectProps) => (
  <SelectMenu.Item value={value} disabled={disabled}>
    <SelectMenu.ItemText>
      <Stack align="center">
        <Box className={`w-3 h-3 rounded-sm ${color}`} />
        {label}
      </Stack>
    </SelectMenu.ItemText>
    <SelectMenu.Indicator>
      <Icon
        label="indicator"
        name="check"
        size="sm"
        color="current"
        className="transition-transform scale-[0.8]"
      />
    </SelectMenu.Indicator>
  </SelectMenu.Item>
);

export const Default: Story<SelectMenuProps> = (args) => {
  return (
    <SelectMenu.Root defaultValue="draft" {...args}>
      <SelectMenu.Group>
        <CustomSelectItem
          value="draft"
          label="Rascunho"
          color="bg-feedback-color-background-warning-hover"
        />
        <CustomSelectItem
          value="invoiced"
          label="Enviado"
          color="bg-interactive-color-background-pressed"
        />

        <CustomSelectItem
          value="paid"
          label="Pago"
          color="bg-action-color-background-secondary-enabled"
        />
        <CustomSelectItem
          value="disabled"
          label="Disabled"
          color="bg-action-color-background-primary-disabled"
          disabled
        />
      </SelectMenu.Group>
    </SelectMenu.Root>
  );
};
