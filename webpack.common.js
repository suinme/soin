const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.tsx',
  plugins: [
    //new CleanWebpackPlugin(['dist/static']),
    //new HtmlWebpackPlugin({
    //  title: 'Hot Module Replacement'
    //}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader?modules&namedExport&camelCase&localIdentName=[name]-[local]-[hash:base64:5]',
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    "react-router-dom": "ReactRouterDOM",
    "mobx": "mobx",
    "mobx-react": "mobxReact"
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash:5]-bundle.js',
    path: path.resolve(__dirname, 'dist/static'),
    publicPath: 'static/'
  }
};