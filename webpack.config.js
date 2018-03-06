const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    'index': PATHS.source + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/contacts.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'projects.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/projects.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/aboutUs.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'tovar-link.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/tovar-link.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'flowers.kzn.html',
      chunks: ['index'],
      template: PATHS.source + '/pug/views/flowers.kzn.pug'
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [ path.resolve(__dirname, 'node_modules/foundation-sites/scss/'), path.resolve(__dirname, 'source/sass/base') ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|docx|doc|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
      {
        test: /\.(woff?2|eot|ttf|otf)$/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[path][name].[ext]',
        ]
      }
    ]
  }
};
