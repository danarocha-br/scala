import { create } from '@storybook/theming';
import { color } from '@skala/design-tokens';

export default create({
  base: 'dark',
  brandTitle: 'Skala Design System',
  brandUrl: 'https://ocompasso.com',
  brandImage: '',
  brandTarget: '_self',

  colorPrimary: color['color-forest-600'],
  colorecondary: color['color-royal-300'],

  // UI
  appBg: color['color-neutral-800'],
  appContentBg: color['color-neutral-600'],
  appBorderColor: color['color-neutral-900'],
  appBorderRadius: 2,

  // Typography
  fontBase: '"Effra", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text color
  textColor: color['color-neutral-200'],
  textInverseColor: color['color-froly-300'],

  // Toolbar default and active color
  barTextColor: color['color-neutral-100'],
  barSelectedColor: color['color-macaroni-500'],
  barBg: color['color-neutral-900'],

  // Form color
  inputBg: color['color-neutral-300'],
  inputBorder: color['color-neutral-700'],
  inputTextColor: color['color-neutral-800'],
  inputBorderRadius: 4,
});
