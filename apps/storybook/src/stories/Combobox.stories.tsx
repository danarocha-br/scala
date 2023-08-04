import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  Combobox,
  ComboboxProps,
  Command,
  Icon,
  Selectable,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    trigger: <Button label="Open popover"></Button>,
    emptyMessage: 'No language found',
    inputPlaceholder: 'Select a language',
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
} as Meta<ComboboxProps>;

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Japanese', value: 'ja' },
] as const;

export const Default: Story<ComboboxProps> = () => {
  const [value, setValue] = useState('');

  return (
    <Combobox
      css={{ width: '180px' }}
      trigger={<Selectable label="Select a language" icon="globe" />}
      emptyMessage="No language found"
      inputPlaceholder="Select a language"
    >
      <Command.Group heading="Suggestions">
        {languages.map((language) => (
          <Command.Item
            value={language.label}
            key={language.value}
            onSelect={() => {
              setValue(language.value);
            }}
            css={{
              backgroundColor:
                language.value === value
                  ? '$interactive-color-background-disabled'
                  : 'transparent',
            }}
          >
            {language.label}
            <Icon
              name="checkcircle"
              label="selected"
              color="success"
              css={{
                opacity: language.value === value ? 1 : 0,
                ml: 'auto',
              }}
            />
          </Command.Item>
        ))}
      </Command.Group>
    </Combobox>
  );
};
