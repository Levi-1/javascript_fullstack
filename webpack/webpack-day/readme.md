webpack 只支持js模块打包

webpack对项目中的模块进行打包

webpack 和 node.js 遵从 commonJS规范

npx webpack --config webpacktest.js 指定打包时配置文件

postcss-loader 可为css添加兼容前缀, 但是在css中有@import时，只使用style-loader 和 postcss-loader时会导致项目包十分膨胀。
css-loader 将css文件转换为commonJs模块
style-loader 将js中的css相关的 JS 字符串生成为 style 节点

# plugin 
1. htmlwebpackplugin 
在项目打包完成后，在其中生成一个引入打包完成的js文件的html模板。
在修改title时应在模板文件中使用ejs模板来修改 <%= htmlWebpackPlugin.optionss.title %>
2. clean-webpack-plugin
在打包之前将上次打包生成的目录删除
3. mini-css-exatract-plugin
将css打包生成css文件，而不是将css以js字符串 集成在打包后的js文件中。