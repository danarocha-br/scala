const { mergeConfig } = require('vite');

const getStories = () => {
  return process.argv[4] === '-stories'
    ? [`../${process.argv[5]}`]
    : [
        '../src/pages/**/*.stories.@(js|mdx|ts|tsx)',
        '../src/stories/**/*.stories.@(tsx)',
      ];
};

module.exports = {
  stories: () => getStories(),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    '@geometricpanda/storybook-addon-badges',
    // "storybook-addon-data-theme-switcher",
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
