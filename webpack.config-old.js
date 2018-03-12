const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    new ExtractTextPlugin('bundle.css'),
    // new CopyWebpackPlugin([
    //   { from: 'CNAME' },
    //   { from: 'source/favicon.ico', to: 'favicon.ico' },
    //   { from: 'source/robots.txt', to: 'robots.txt' },
    // ]),
    // new GhPagesWebpackPlugin({
    //     path: 'build',
    //     options: {
    //       branch: 'master',
    //       add: false,
    //       repo: 'git@github.com:headmade/headmade.github.io.git',
    //       message: 'Update Page',
    //       user: {
    //           name: 'Headmade',
    //           email: 'info@headmade.pro'
    //       }
    //     }
    // })
  ],
  module: {
    rules: [
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
        test: /\.(jpg|jpeg|png|svg|docx|doc|pdf|woff?2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      }
    ]
  }
};
