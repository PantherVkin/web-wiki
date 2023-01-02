# 10-抽离css文件 
# 1 抽离css文件

**抽离css文件：**

> 目前，css代码被css-loader转换后，交给的是style-loader进行处理。style-loader使用的方式是用一段js代码，将样式加入到style元素中。
> 
> 
> 
> 
> 而实际的开发中，我们往往希望依赖的样式最终形成一个css文件。

> 此时，就需要用到一个库：`mini-css-extract-plugin`

**`mini-css-extract-plugin`****：**

> 该库提供了1个plugin和1个loader

> plugin：负责生成css文件

> loader：负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象

- 使用方式 

    constMiniCssExtractPlugin = require("mini-css-extract-plugin")
    module.exports = {
    module: {
    rules: [
                {
    test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
                }
            ]
        },
    plugins: [
    newMiniCssExtractPlugin() //负责生成css文件
        ]
    }

- 配置生成的文件名

> 同`output.filename`的含义一样，即根据chunk生成的样式文件名。

> 配置生成的文件名，例如`[name].[contenthash:5].css`。

> 默认情况下，每个chunk对应一个css文件。

    constHtmlWebpackPlugin = require("html-webpack-plugin")
    var { CleanWebpackPlugin } = require("clean-webpack-plugin")
    constMiniCssExtractPlugin = require("mini-css-extract-plugin")
    module.exports = {
    mode: "development",
    entry: {
    main: "./src/index.js",
    other: "./src/other.js"    },
    output: {
    filename: "js/[name].[chunkhash:5].js",
    publicPath: "/"    },
    module: {
    rules: [
                {
    test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
                },
                {
    test: /\.jpg$/, use: {
    loader: "file-loader",
    options: {
    name: "img/[hash:5].[ext]"                    }
                    }
                }
            ]
        },
    devServer: {
    open: true    },
    plugins: [
    newCleanWebpackPlugin(),
    newHtmlWebpackPlugin({
    template: "./public/index.html"        }),
    newMiniCssExtractPlugin({
    filename: "css/[name].[contenthash:5].css"        })
        ]
    }
    

index.js

    importstylesfrom"./assets/index.css";
    vardiv = document.createElement("div");
    div.className = styles.main;
    document.body.appendChild(div);

other.js

    import"./assets/b.css"

index.css

    .main{
    width: 500px;
    height: 300px;
    background: url("./img/china.jpg");
    background-size: 100%100%;
    }