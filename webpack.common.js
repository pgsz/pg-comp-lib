const path = require('path')

/**
 * webpack 五大核心配置：
 *  入口（entry）、出口（output）、loader、插件（plugin）、模式（mode）
 *  延伸面试题：loader与插件的区别
*/
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'pg-comp-lib.common.js',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
    // 没有改配置项，组件会挂载到 default 属性下，需要comp.default.xx 这样使用
    libraryExport: 'default'
  }
}