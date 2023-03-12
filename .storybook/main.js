const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-next',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // emotion用のbabelの設定
  babel: async (options) => {
    const presetReact = options.presets.find((p) => /preset-react/.test(p[0]));
    presetReact[1] = {
      ...presetReact[1],
      runtime: 'automatic',
      importSource: '@emotion/react',
    };
    options.plugins.push(require.resolve('@emotion/babel-plugin'));
    return options;
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')]; // 絶対パスでimportできるようにする
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    return config;
  },
};
