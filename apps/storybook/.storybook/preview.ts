import { themes } from '@storybook/theming';
import { theme, darkTheme } from '../../../packages/react/src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        'Foundations',
        'Primitives',
        'Structure & Layout/Box',
        'Components',
        'Navigation',
        'Form',
        'Templates',
      ],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors['surface-color-background-default'],
      },
      {
        name: 'dark',
        value: darkTheme.colors['surface-color-background-default'],
      },
    ],
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
  multipleThemesStitches: {
    values: [
      {
        name: 'Light',
        theme: theme,
      },
      {
        name: 'Dark',
        theme: darkTheme,
      },
    ],
  },
};
