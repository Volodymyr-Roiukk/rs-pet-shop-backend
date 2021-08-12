const slsw = require('serverless-webpack');

module.exports = {
  entry: './index.js',
  target: 'node',
  entry: slsw.lib.entries
};
