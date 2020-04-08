module.exports = {
  stories: ['../stories/*.stories.jsx'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['react-docgen'],
        },
      },
    })
    return config
  },
}
