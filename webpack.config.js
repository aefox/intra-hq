const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeModulesPath = path.join(__dirname, 'node_modules');
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'babel-polyfill',
      // this list should be updated
    ],
    app: [
      path.join(__dirname, 'src', 'index.tsx')
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less', '.css', '.scss'],
    modules: ["node_modules", "resources"],
  },

  output: {
      path: path.join(__dirname, 'build'),
      filename: '[name]_[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { emitErrors: true }
      },
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader?cacheDirectory", "awesome-typescript-loader?tsconfig=tsconfig.webpack.json&useCache=true"]
      },
			{
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
        })
			},
      {
        test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
        loader: "file-loader?name=[name]_[hash].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors_[hash].js' }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.DefinePlugin({
      DEBUG: true
    })
  ]
};

// TODO: not tested yet
// if (isProduction) {
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//      compress: {
//         warnings: false
//     }
//   }));
//   config.plugins.push(new webpack.DefinePlugin({
//     'process.env': {NODE_ENV: '"production"'},
//     DEBUG: false
//   }));
// }

module.exports = config;
