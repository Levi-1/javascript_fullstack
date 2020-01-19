# dist 存放打包后的文件
# src 
# 
# 
# 
# 

webpack中的module 用来决定如何处理项目中的不同类型模块

webpack 模块支持语法：
    es6 import
    Commonjs require()
    AMD define 和 requier
    css/sass/less/ 文件中的@import 语句
    演示(url(...)) 或者html文件（<img src="...">）中的图片连接


autoprefixer 进行浏览器不放呢兼容补全

# 抽取样式将css单独打包

# 压缩打包
- 压缩css (optimize-css-assets-webpack-plugin)
- 压缩 js (uglifyjs-webpack-plugin)

# 为css 和 js 添加hash值防止缓存

# html 打包
- html-webpack-plugin

# 清理目录
- clean-webpack-plugin

# webpack处理图片和优化
- file-loader
- image-webpack-loader