import { Meta, Story } from '@storybook/react';
import {
  Dropdown,
  Navigation,
  NavigationProps,
  Stack,
  Icon,
  Tooltip,
  Button,
  Shortcut,
  Text,
  Box,
  SearchButton,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Navigation/Navigation',
  component: Navigation.Wrapper,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    user_email: 'hello@danarocha.com',
    user_name: 'Dana Rocha',
    user_imageURL: '',
    children: (
      <>
        <Stack direction="column" gap="2" fullWidth>
          <SearchButton
            label="Search"
            shortcut="⌘ + K"
            css={{ mb: '$spacing-4' }}
          />
          <Navigation.Item
            label="Projects"
            icon="project"
            href="/projects"
            shortcut="⌘ + P"
          />
          <Navigation.Item
            label="Invoices"
            icon="invoice"
            href="/invoices"
            shortcut="⌘ + I"
            isActive
          />
          <Navigation.Item label="Clients" icon="user" href="/clients" />
          <Navigation.Item
            label="Special"
            icon="development"
            href="/special"
            disabled
          />
        </Stack>

        <Stack direction="column" gap="2" fullWidth>
          <Navigation.Item
            label="Invite teammates"
            icon="add-user"
            href="/"
            shortcut="⌘ + P"
          />
          <Navigation.Item
            label="Upgrade"
            icon="star"
            href="/"
            shortcut="⌘ + P"
          />
        </Stack>
      </>
    ),
    userMenu: (
      <>
        <Dropdown.Item textValue="Configurações">
          <Icon name="settings" label="settings" css={{ mr: '$spacing-2' }} />
          <a href="/">
            Configurações <Dropdown.RightSlot>⌘ C</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item textValue="Preferências">
          <Icon name="settings" label="settings" css={{ mr: '$spacing-2' }} />
          <a href="/">
            Preferências <Dropdown.RightSlot>⌘ P</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item textValue="Sair">
          <a href="/">Sair</a>
        </Dropdown.Item>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    userMenu: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    user_name: {
      table: {
        category: 'Text',
      },
    },
    user_email: {
      table: {
        category: 'Text',
      },
    },
    user_imageURL: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Stack gap="8" align="center" css={{ h: '100vh' }}>
        {Story()}
      </Stack>
    ),
  ],
} as Meta<NavigationProps>;

export const Example: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);

export const WithFooter: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
WithFooter.args = {
  footer: (
    <>
      <Tooltip content="Made with ❤️ by Compasso">
        <Text color="body-lighter" css={{ ml: '$spacing-3' }}>
          C
        </Text>
      </Tooltip>
      <Box css={{ d: 'inline-flex', mr: '$spacing-2', gap: '$spacing-2' }}>
        <Tooltip content="Configuraçoes" slot={<Shortcut shortcut="⌘ C" />}>
          <Button label="settings" variant="icon" icon="settings" size="sm" />
        </Tooltip>

        <Tooltip content="Ajuda / Feedback" slot={<Shortcut shortcut="⌘ H" />}>
          <Button label="help" variant="icon" icon="help" size="sm" />
        </Tooltip>
      </Box>
    </>
  ),
};

export const WithNavigationToggle: Story<NavigationProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Navigation.Wrapper
      {...args}
      isNavigationOpen={isOpen}
      onNavigationOpenChange={() => setIsOpen(!isOpen)}
      footer={
        <>
          <Tooltip content="Made with ❤️ by Compasso">
            <Text color="body-lighter" css={{ ml: '$spacing-3' }}>
              C
            </Text>
          </Tooltip>
          <Box css={{ d: 'inline-flex', mr: '$spacing-2', gap: '$spacing-2' }}>
            <Tooltip content="Configuraçoes" slot={<Shortcut shortcut="⌘ C" />}>
              <Button
                label="settings"
                variant="icon"
                icon="settings"
                size="sm"
              />
            </Tooltip>

            <Tooltip
              content="Ajuda / Feedback"
              slot={<Shortcut shortcut="⌘ H" />}
            >
              <Button label="help" variant="icon" icon="help" size="sm" />
            </Tooltip>
          </Box>
        </>
      }
    />
  );
};

export const ExampleLoading: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
ExampleLoading.args = {
  loading: true,
  children: (
    <>
      <Navigation.Item
        label="Projects"
        icon="project"
        href="/projects"
        shortcut="⌘ + P"
        loading
      />
      <Navigation.Item
        label="Invoices"
        icon="invoice"
        href="/invoices"
        shortcut="⌘ + I"
        isActive
        loading
      />
      <Navigation.Item label="Clients" icon="user" href="/clients" loading />
    </>
  ),
};

export const NavigationItem: Story<NavigationProps> = () => (
  <Stack
    direction="column"
    justify="center"
    css={{ h: '100vh', w: '100%', px: 380 }}
  >
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Regular Active
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      isActive
    />
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Regular
    </Text>
    <Navigation.Item icon="invoice" label="Invoices" href="/invoices" />

    <Text size="xs" css={{ ml: '$spacing-3' }}>
      With Shortcut
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
    />

    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Disabled
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
      disabled
    />
    <Text size="xs" css={{ ml: '$spacing-3' }}>
      Loading
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
      loading
    />
  </Stack>
);
