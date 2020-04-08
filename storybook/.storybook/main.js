const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: ['../stories/*.stories.(jsx|mdx)'],
  addons: ['@storybook/addon-docs/register'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx',
              'babel-plugin-react-docgen',
            ],
            cacheDirectory: true,
          },
        },
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            enforce: 'pre',
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    })
    return config
  },
}
