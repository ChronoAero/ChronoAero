  const path = require('path');
  const CopyWebpackPlugin = require('copy-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: './src/view/index.tsx',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins:[
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/view/public', to: 'view/public' },
        ]
      })
    ]
  };