//@ts-nocheck
'use client';

import React from 'react';
import {
  Box,
  Navigation,
  Tooltip,
  Shortcut,
  IconButton,
  Text,
  Stack,
  Dropdown,
  useSideBarNavigation,
  Icon,
  SearchButton,
} from '@compasso/scala';

const sidenavItems = Object.values({
  home: {
    icon: 'home',
    label: 'Home',
    shortcut: '⇧⌘P',
    href: '/',
  },
  templates: {
    icon: 'template',
    label: 'Templates',
    shortcut: '⇧⌘I',
    href: '/templates',
  },
  onboarding: {
    icon: 'calendar',
    label: 'Onboarding',
    shortcut: '⇧⌘I',
    href: '/plans',
  },
  reports: {
    icon: 'linear-chart',
    label: 'Reports',
    shortcut: '⇧⌘I',
    href: '/reports',
  },
});

export default function NavigationDoc() {
  const { isSidebarOpen, changeSidebarStatus } = useSideBarNavigation();
  const user = {
    name: 'Dana Rocha',
    email: 'hello@danarocha.com',
    image_URL: 'https://source.unsplash.com/ew_Ou6oiQ2c',
  };

  return (
    <Box className="flex min-h-screen bg-background-color-default">
      <Navigation.Wrapper
        isNavigationOpen={isSidebarOpen}
        onNavigationOpenChange={() => changeSidebarStatus()}
        user_email={user.email}
        user_imageURL={user.image_URL}
        user_name={user.name}
        userMenu={
          <>
            <Dropdown.Item textValue="Settings">
              <Icon name="settings" label="settings" className="mr-2" />
              <a href="/">
                Settings
                <Dropdown.RightSlot>⌘ C</Dropdown.RightSlot>
              </a>
            </Dropdown.Item>
            <Dropdown.Item textValue="Preferences">
              <Icon name="settings" label="Preferences" className="mr-2" />
              <a href="/">
                Preferences
                <Dropdown.RightSlot>⌘ P</Dropdown.RightSlot>
              </a>
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item textValue="Logout">
              <a href="/">Logout</a>
            </Dropdown.Item>
          </>
        }
        footer={
          <>
            <Tooltip content="Compasso">
              <Text color="body-lighter" className="ml-3">
                C
              </Text>
            </Tooltip>
            <Box className="mr-2 inline-flex gap-2">
              <Tooltip content="Settings" slot={<Shortcut shortcut="⌘ C" />}>
                <IconButton label="Settings" icon="settings" size="sm" />
              </Tooltip>

              <Tooltip content="Help" slot={<Shortcut shortcut="⌘ H" />}>
                <IconButton label="Help" icon="help" size="sm" />
              </Tooltip>
            </Box>
          </>
        }
      >
        <Stack direction="column" gap="2" justify="between" fullWidth>
          <SearchButton
            label="Search"
            shortcut="⌘ + K"
            className={`mb-4 group-data-[state=closed]/root:opacity-0 group-data-[state=open]/root:opacity-100 group-data-[state=closed]/root:transition-opacity group-data-[state=closed]/root:delay-500`}
            onClick={() => alert('implement command search')}
          />

          {React.Children.toArray(
            sidenavItems.map((item) => (
              <Navigation.Item
                label={item.label}
                icon={item.icon}
                href={item.href}
                shortcut={item.shortcut}
              />
            ))
          )}
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
      </Navigation.Wrapper>
    </Box>
  );
}
