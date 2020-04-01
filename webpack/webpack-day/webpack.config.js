const path = require('path')
module.exports = { // commonJS 规范
    entry: "./index.js", //  指定打包的入口
    output: { // 指定打包的出口
        // 公共路径设置
        // publicPath: "",
        path: path.resolve(__dirname, "build"), // 打包后的资源位置
        filename: "index.js" // 打包后的文件名
    }

}