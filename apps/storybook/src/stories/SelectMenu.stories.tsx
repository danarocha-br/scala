import { Story, Meta } from '@storybook/react';
import { Box, Icon, SelectMenu, SelectMenuProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/SelectMenu',
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
        <Stack align="center" justify="center" css={{ h: '100vh', px: 200 }}>
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
        <Box
          css={{
            w: '$spacing-3',
            h: '$spacing-3',
            borderRadius: '$radii-sm',
            bg: color,
          }}
        />
        {label}
      </Stack>
    </SelectMenu.ItemText>
    <SelectMenu.Indicator>
      <Icon
        label="indicator"
        name="check"
        size="sm"
        color="current"
        css={{ transform: 'scale(0.8)' }}
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
          color="$feedback-color-background-warning-hover"
        />
        <CustomSelectItem
          value="invoiced"
          label="Enviado"
          color="$interactive-color-background-pressed"
        />

        <CustomSelectItem
          value="paid"
          label="Pago"
          color="$action-color-background-secondary-enabled"
        />
        <CustomSelectItem
          value="disabled"
          label="Disabled"
          color="$action-color-background-primary-disabled"
          disabled
        />
      </SelectMenu.Group>
    </SelectMenu.Root>
  );
};
