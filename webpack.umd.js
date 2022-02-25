const path = require('path')

module.exports = {
  entry: {
    log: './packages/log/src/index.js',
    hello: './packages/hello/src/index.js',
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, './lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'pg-comp-lib',
    libraryExport: 'default'
  }
}