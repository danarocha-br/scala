import { themes } from '@storybook/theming';
import { theme, darkTheme } from '../../react/src/styles';

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
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        'Foundations',
        'Primitives',
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
        value: theme.colors['background-default'],
      },
      {
        name: 'dark',
        value: darkTheme.colors['background-default'],
      },
    ],
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
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

// export const decorators = [
//   (Story) => (
//     <>
//       {globalStyles()}
//       <Story />
//     </>
//   ),
// ];
