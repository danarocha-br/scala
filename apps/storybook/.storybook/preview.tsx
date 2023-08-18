import React from 'react';
import { themes } from '@storybook/theming';
import '../../../packages/react/dist/index.css';

// export const preview = {
//   globalTypes: {
//     dataThemes: {
//       defaultValue: 'dark',
//     },
//   },
// };

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
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#000',
      },
    ],
  },
};
