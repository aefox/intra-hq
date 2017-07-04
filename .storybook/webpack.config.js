const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
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
        loaders: ["babel-loader?cacheDirectory", "awesome-typescript-loader?configFileName=tconfig.webpack.json&useCache=true"]
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
        test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/i,
        loader: ["file-loader?name=[name]_[hash].[ext]"]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('app.styles.css')
  ]
};
