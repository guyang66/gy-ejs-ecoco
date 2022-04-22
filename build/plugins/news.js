const HtmlWebpackPlugin = require('html-webpack-plugin');

class TdkPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('TdkPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'TdkPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          if(data.outputName.indexOf('news/') > -1){
            data.html = data.html.replace('<meta name="description" content="">', '<meta name="description" content="' + data.plugin.options.tdk.description + '">')
            data.html = data.html.replace('<title></title>', '<title>' + data.plugin.options.tdk.title + '</title>')
            data.html = data.html.replace('<meta name="keywords" content="">', '<meta name="keywords" content="' + data.plugin.options.tdk.keywords + '">')
          }
          cb(null, data)
        }
      )
    })
  }
}

module.exports = TdkPlugin
