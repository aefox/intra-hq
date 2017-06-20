const path = require("path");

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
        loaders: ["babel-loader?cacheDirectory", "awesome-typescript-loader?tsconfig=tsconfig.webpack.json&useCache=true"]
      }
    ]
  }
};
