# 07-在webpack中使用less 
# 1 **在webpack中使用less**

`**less-loader**`​ ：

> ​`npm i -D less-loader less`​

- index.js

    importstylesfrom"./assets/index.less"vardiv=document.getElementById("app");
    div.className=styles.main;

- webpack.config.js

    constHtmlWebpackPlugin=require('html-webpack-plugin')
    module.exports= {
    mode: "development",
    devServer: {
    open: true    },
    module: {
    rules: [
                { test: /\.css$/, use: ["style-loader", "css-loader"] },
                { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] },
            ]
        },
    plugins: [
    newHtmlWebpackPlugin({
    template: "./public/index.html"        })
        ]
    }