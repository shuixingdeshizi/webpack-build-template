const path = require('path');

module.exports = {
  mode: 'development', // "production" | "development" | "none" 

  entry: {
    index: './src/index/index.js',
    login: './src/login/login.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: '[name].bundle.js',
  },
  watch: true,
  // devtool: "source-map", // enum  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试

  context: __dirname, // string（绝对路径！）

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    port: 9000,
    open: true,
    publicPath: '/dist/'

  },

  plugins: [
    // ...
  ]
}