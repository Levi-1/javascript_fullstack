const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')
module.exports = { // commonJS 规范
    mode: "development",
    entry: "./index.js", //  指定打包的入口
    output: { // 指定打包的出口
        // 公共路径设置
        // publicPath: "",
        path: path.resolve(__dirname, "build"), // 打包后的资源位置
        filename: "index.js" // 打包后的文件名
    },
    // devtool:"source-map",
    devtool: "cheap-module-eval-source-map", // 开发环境
    // devtool: "cheap-module-source-map", // 线上环境 （生产环境

    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 1048576 // 1m
                    }
                }
            }
            // {
            //     test:/\.css$/,
            //     use: ["style-loader", "css-loader", "postcss-loader"]
            // }
            ,
            {
                test:/\.css$/,
                use: [MiniCssWebpackPlugin.loader, "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            title: "levi",
            filename: "index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssWebpackPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        contentBase: "./build",
        open: true,
        port: "8081",
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}