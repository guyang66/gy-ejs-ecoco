const HtmlWebpackPlugin = require('html-webpack-plugin');
const settings = require('./settings');

// 替换所有的静态资源, 发布的时候把整个assets目录放到cdn上即可。
// 开发环境不需要此插件。
class CdnPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('CdnPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'CdnPlugin',
        (data, cb) => {
          data.html = data.html.replace(/"\/assets([^"]*)"/g, function (matchStr, content){
            let originAttrString =  matchStr.replace(/"/g, '') // 去掉双引号
            return '"' + settings.defaultPublicPath + originAttrString + '"'
          })
          cb(null, data)
        }
      )
    })
  }
}

module.exports = CdnPlugin
