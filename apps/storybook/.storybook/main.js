const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../src/pages/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    '@whitespace/storybook-addon-html',
    '@geometricpanda/storybook-addon-badges',
    'multiple-themes-stitches',
    '@whitespace/storybook-addon-html'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  // viteFinal: (config, { configType }) => {
  //   if (configType === 'PRODUCTION') {
  //     config.base = '/scala/';
  //   }

  //   return config;
  // },
  async viteFinal(config, { configType }) {
    // return the customized config

    if (configType === 'PRODUCTION') {
      config.base = '/scala/';
    }

    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {},
    });
  },
};
