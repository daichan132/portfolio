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
};
