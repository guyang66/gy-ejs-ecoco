const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css压缩
const settings = require('./settings');
const path = require('path')

module.exports = [
  {
    test: /\.styl$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                "postcss-preset-env",
                {
                  browsers: 'last 2 versions'
                }
              ],
            ],
          },
        }
      },
      {
        loader: 'stylus-loader',
        options: {
          sourceMap: true,
        },
      }
    ]
  },
  {
    test: /\.(js)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      }
    ]
  },
  {
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
      options: {
        minimize: false,
        esModule: true
      }
    }]
  },
  {
    test: /\.ejs/,
    use: [{
      loader: 'ejs-loader',
      options: {
        esModule: false
      }
    }]
  },
  {
    test: /\.(png|jpe?g|gif|svg|ico)$/i,
    loader: 'file-loader',
    // 普通图片打包
    exclude: [
      path.resolve(__dirname, '../src/assets/images/cssBg')
    ],
    options: {
      name: '[path][name].[ext]',
      context: settings.context
    },
  },
  // 在css中使用为background-img属性的图片，打包的时候路径始终存在问题，
  // 故单独拎出来统一路径打包（肯定还有其他统一的解决办法）
  {
    test: /\.(png|jpe?g|gif|svg|ico)$/i,
    loader: 'file-loader',
    include: [
      path.resolve(__dirname, '../src/assets/images/cssBg')
    ],
    options: {
      name: '/[path][name].[ext]',
      context: settings.context
    },
  }
];
