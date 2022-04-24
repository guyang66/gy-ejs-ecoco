## 项目简介
本项目内容为常见企业官网展示，MPA(多页应用)的纯静态页面，比较传统的做法。
不包含人和接口调用功能，所以表单功能尚未实现（代码中todo部分）

本项目非Demo，花了较多心思，为了保证页面的完整性，花了很多功夫在图片上，完成度接近于95%，可直接用于项目中，
首页预览图

产品预览图

### 架构
webpack5 + ejs + stylus + jquery
## 目录结构
```
├─ build                          Webpack编译文件配置目录
    ├─ settings.js                打包路径等相关配置入口
    ├─ entry.js                   入口配置
    ├─ plugins.js                 插件配置
    ├─ rules.js                   loader等配置
        ├─ loaders                自定义webpack loader
        ├─ plugins                自定义webpack plugins
            ├─ cdn.js             处理部分静态资源cdn的插件
            ├─ news.js            处理新闻页面的tdk
    ├─ webpack.config.js          配置文件入口
├─ dist                           打包生成目录
    ├─ assets                     静态文件目录,对应'src/assets'
    ├─ js                         打包生成js目录
        ├─ *.js
    ├─ css                        打包生成的css目录
        ├─ *.css
    ├─ *.html                     打包生成的多页面html
├─ script                         脚本js
	├─ deploy                     发布脚本
    ├─ filter                     条件编译脚本，用于提高开发效率
├─ seo                            seo相关配置文件
├─ src                            开发目录
    ├─ assets                     静态文件公共目录
        ├─ images                 图片资源  
        ├─ js                     公共js
        ├─ plugins                第三方插件/库（多为jqeury相关）
    ├─ components                 公共模块（组件）—— 多个页面公用的模板可放于此
    ├─ configs                    项目配置目录
        ├─ index.js               公共配置
        ├─ router.js              路由配置
        ├─ tdk.js                 tdk配置
    ├─ data                       内容文案数据（可用json代替）
    ├─ layouts                    框架模块等
    ├─ pages                      多页面入口（page-开头的文件夹是页面）
        ├─ index                  示例首页
            ├─ index.js           页面模板入口,根据静态数据等生成页面dom在此处操作
            ├─ main.js            页面入口文件,静态页面加载后相关动态数据等交互逻辑在此处操作
            ├─ style.styl         页面stylus样式
            ├─ template.ejs       页面ejs模板
        ├─ ...                    每个页面的文件结构都和‘示例首页’一致
    ├─ styles  
        ├─ article.styl           文章模块样式                   
        ├─ global.styl            html公共样式
        ├─ common.styl            页面公共样式
        ├─ layout.styl            页面框架布局模板样式
        ├─ component.styl         组件样式
        ├─ variables.styl         stylus变量维护
    ├─ utils                      工具库
        ├─ utils.js               工具函数
    ├─ ...
```
## 注意事项

### UI排版调研设计
因为没有真实的设计稿，所以排版和布局和样式尽可能参考阿里云官网，有了可参考的"目标"才能更快的完成开发。
1、header高度：64px
2、标准尺寸：1280px
3、二级导航栏高度：50px
    首页banner 高度535px
    内页banner 高度370 或者 370 + 64（导航栏高度，导航栏半透明） = 434px
4、首页无二级导航栏（tab导航），一级导航栏fix固定顶部，内页有二级导航栏，一级导航栏不fix固定顶部，二级导航栏固定顶部。
5、主体色：#4169E1(好像也没咋用，颜色搭配太乱了，色系搭配就让专业的UI去定吧)

- ### 项目启动/开发环境
```
npm install
npm start
```
- ### 开发环境(部分编译)
只打包首页和新闻相关页面()
```
ENTRY_FILTER=index,news npm run dev
```
- ### 打包/部署
```
npm run tar
然后用scp上传压缩包部署即可
```
如果有服务器可以直接执行脚本部署
```
npm run deploy
注：需要将/scripts/deploy/... 中的xxx修改为你自己服务器对应的信息
```
- ### 其他
代码美化
```
npm run eslint-fix
npm run beauty
```
