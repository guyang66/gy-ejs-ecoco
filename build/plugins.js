const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html解析
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除历史文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // css抽离
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 静态文件复制

const settings = require('./settings');
const newsPlugin = require('./plugins/news')
const plugins = [];

settings.routers.forEach(page => {
  // 对新闻详情页面单独处理
  if (page.name === 'about/news/detail') {
    settings.articleList.forEach(item => {
      plugins.push(
        new HtmlWebpackPlugin({ // 多页面配置
          filename: `about/news/${item.id}.html`,  // 页面名称
          template: settings.pathTemplate(page.path),  // 页面模板
          chunks: [`about/news/${item.id}`],  // js chunks
          minify: false,
          hash: true,
          inject: 'body',
          tdk: {
            title: item.title,
            keywords: item.keywords,
            description: item.description
          }
        })
      );
    });
  } else {
    plugins.push(
      new HtmlWebpackPlugin({ // 多页面配置
        filename: `${page.name}.html`,  // 页面名称
        template: settings.pathTemplate(page.path),  // 页面模板
        chunks: [page.name],  // js chunks
        minify: false, // 不实用html压缩
        inject: 'body', // 所有javascripts资源插入body元素的底部
      })
    );
  }
});
plugins.push(
  new MiniCssExtractPlugin({
    filename: settings.filename_css,
  })
);
plugins.push(
  new newsPlugin()
);

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),  // 热更新相关
  );
  plugins.push(
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),  // 清除历史打包文件
    new CopyWebpackPlugin({ // 打包静态文件copy
      patterns: [
        {
          from: settings.pathStaticCopy[0],
          to: settings.pathStaticCopy[1]
        }
      ]
    })
  );
} else {
  plugins.push(
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),  // 清除历史打包文件
    new CopyWebpackPlugin({ // 打包静态文件copy
      patterns: [
        {
          from: settings.pathStaticCopy[0],
          to: settings.pathStaticCopy[1]
        }
      ]
    })
  );
}

module.exports = plugins;
