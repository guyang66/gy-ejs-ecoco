### 项目简介

本项目内容为常见企业官网展示，MPA(多页应用)的纯静态页面，比较传统的做法。
因为没有服务端的支持，所有本项目不包含任何接口调用功能，所以表单（form.html）功能尚未实现（代码中todo部分）

本项目并非Demo，花了较多时间在图片和布局排版上（都逼得自己上手ps和ai修图了），奈何文案内容实在太难编造（又不能抄被人的 -- ），所以大多数文案都是
不相关的内容（来源于某度百科），请大家理解 - -，然后手机端适配也没有实现（会在重构项目kcoco上实现适配方案），整体完成度接近于80%。
如果用于实际项目，请自行修改相关文案或重新设计。

因为这个项目是纯静态页面，没有服务端支持，所以总缺少点什么，另一方面，因为没有服务端数据支持，所以很多数据都是写死在前端的，甚至有些视图是
通过js去渲染的，对于一个官网项目而言，这样不是很好（对seo不太友好）。所以触发了我重构这个项目的决心，决定用ssr（服务端渲染），同时配上
服务端（koa + mongodb）和管理后台（react项目）去管理官网内容，然后再补上手机端适配，让他成为一个完完整整的项目。

在评估重构的时候，遇到很多困难，总之还是学习到不少东西，也建议看到这个项目的同学也去参观参观另外2个项目，总会有你想要的 - -

重构项目：kcoco，由这个项目（ecoco）重构而来，仍然沿用了ejs模板和stylus预处理，官网扩展为服务端渲染并提供服务端支持。架构方面：
前端采用ejs + jqeury + gulp，服务端采用：koa2 + mongodb

项目源码地址： [nodejs-kcoco](https://github.com/guyang66/gy-nodejs-kcoco)

管理后台：rcoco，这个项目是kcoco的双子项目，是官网内容管理后台（类似crm），采用react + webpack + stylus 架构的单页面应用

项目源码地址：[react-rcoco](https://github.com/guyang66/gy-react-rcoco)

首页预览图:

![首页](/src/assets/preview/index.gif)

产品预览图:

![首页](/src/assets/preview/product.gif)

项目效果预览（生产环境)地址：[yy科技网站](http://120.48.51.123:4001)

### 技术栈

webpack5 + ejs + stylus + jquery

***

### 目录结构

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
	├─ deploy                     迭代发布脚本
    ├─ filter                     条件编译脚本，用于提高开发效率
    ├─ tar                        压缩打包后的资源脚本
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
其它说明：
1、src/page目录下以page-开头的则为页面，否则为"路由"
2、src/assets目录下的图片均用tinypng压缩到最小
***

### UI排版/设计
因为没有真实的设计稿，所以排版和布局和样式尽可能参考阿里云官网，有了可参考的"目标"才能更快的完成开发。本项目所有图片资源均为某宝、某图网购买或
阿里巴巴矢量素材网，如果有侵权，请联系（13588295865@163.com）我删除。
1、header高度：64px
2、标准尺寸：1280px
3、二级导航栏高度：50px
    首页banner 高度535px
    内页banner 高度370 或者 370 + 64（导航栏高度，导航栏半透明） = 434px
    banner宽度（pc端）：1920px
4、首页无二级导航栏（tab导航），一级导航栏fix固定顶部，内页有二级导航栏，一级导航栏不fix固定顶部，二级导航栏固定顶部。
5、主体色：#4169E1(好像也没咋用，颜色搭配太乱了，色系搭配还是得让专业的UI去敲定吧)
6、模块标题字体：28px #181818，常规：14px #444444

***

- ### 项目启动/开发环境
```
npm install
npm start
```
- ### 开发环境(部分编译)
开发的时候往往不需要compile所有页面，只需要专注开发的几个页面，compile所有页面，
一是compile所有文件时间太长、二是热更新缓慢（尤其更修改了公共组件、公共css，影响范围较大时）
如下，只打包首页和新闻相关页面（需要打包多个，需用逗号,隔开）
```
ENTRY_FILTER=index,news npm run dev
```
- ### 生产环境打包
```
npm run build
```
- ### 生产环境打包并压缩打包好的资源
```
npm run tar
然后用scp上传压缩包部署即可
```

- ### 生产环境迭代（发布）脚本
前提项目已在服务端部署过，如还未部署项目，请跳至『生产环境发布/部署』
注：需要将/scripts/deploy/config.js... 中的服务器配置参数修改为你自己服务器对应的信息

```
npm run deploy
```
- ### 其他
代码美化
```
npm run eslint-fix
npm run beauty
```

***

### 首次生产环境发布/部署
本项目采用nginx作为web服务器
1、服务端安装nginx（如何安装nginx请自行查阅相关资料，这里不再展开）
2、上传dist目录下的静态资源文件到服务器目录下：（我服务器目录为：/opt/workspace/ecoco）
3、增加nginx配置如下：
```
server {
    # 端口可以自定义
    listen  4001;
    server_name ecoco;

    location / {
     root /opt/workspace/ecoco/;
     index  index.html index.htm;
     try_files $uri /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
     root html;
    }
 }
 ```
4、启动(重启)nginx
```
cd {nginx执行目录（bin或sbin目录下）}
sudo ./nginx 
或者nginx已启动，则重启
sudo ./nginx -s reload

```
访问{服务端ip}:4001/index.html即可预览
5、如果对错误页面、404页面、重定向、缓存之类的额外需求，请自行查询nginx相关资料，自行配置。

***
### License

MIT

***

### 作者联系方式

wx：gy668991
email：13588295865@163.com
