const slsw = require('serverless-webpack');
const { IgnorePlugin } = require('webpack'); 

module.exports = {
  entry: './index.js',
  target: 'node',
  entry: slsw.lib.entries,
  plugins: [
    new IgnorePlugin({ resourceRegExp: /^pg-native$/ })
  ],
};
