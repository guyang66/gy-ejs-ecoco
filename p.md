## 记录一些遇到的错误和坑，有需要的自行查阅

### 1.webpack和其他库的兼容性
    1.1
    webpack5 高版本可能报错 @types/estree 这个依赖找不到，看了下webpack高版本的依赖库@types/estree版本是"^0.0.51"，
    然后去npm官网查看了下该库的版本的确是更新到0.0.51版本。但是手动安装最新的：npm install @types/estree 却是0.0.50版本。
    然后降级到webpack5.11.0版本发现内置依赖库@types/estree版本是"^0.0.50"，问题暂时解决。如果npm install 报这个错，请在
    package.json手动写死webpack版本为5.21.0或者更低的5.11.0
    
    1.2
    如果报错 __webpack_base_uri__ is not defined，可能是html-webpack-plugin和webpack版本不兼容，适当升级或者降级二者。

### 2.css background-image webpack打包路径不对
