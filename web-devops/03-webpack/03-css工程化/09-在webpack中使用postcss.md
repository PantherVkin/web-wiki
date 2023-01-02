# 09-在webpack中使用postcss 
# 1 在webpack中使用postcss

**解析过程：**

> ​index.pcss --> postcss --> 普通的css --> css-loader --> js --> style-loader --> style元素​

- postcss.config.js 

    module.exports = {
    map: false, //关闭source-mapplugins: {
    "postcss-preset-env": {
    stage: 0, //哪怕是处于草案阶段的语法，也需要转换
    preserve: false        }
        }
    }

- webpack.config.js

    constHtmlWebpackPlugin = require("html-webpack-plugin")
    module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
    rules: [
                {
    test: /\.pcss$/, use: ["style-loader", "css-loader?modules", "postcss-loader"]
                }
            ]
        },
    devServer: {
    open: true    },
    plugins: [
    newHtmlWebpackPlugin({
    template: "./public/index.html"        })
        ]
    }