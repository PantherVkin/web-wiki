# 11-bundle analyzer 
# 1 **bundle analyzer**

**bundle analyzer：**

> 打包结果分析。图形化显示。

- webpack-bundle-analyzer 

> [https://www.npmjs.com/package/webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

![image.png](../../.gitbook/assets/1603239667060-65a90570-564d-4308-b11b-0fc0e8356fa7.png)

- `src/index.js`​

    import$from"jquery";
    import_from"lodash"$(".red").click(asyncfunction() {
    console.log(_.chunk([1, 3, 4, 67], 2));
    });

- `webpack.config.js`​

    const { CleanWebpackPlugin } =require("clean-webpack-plugin");
    constWebpackBundleAnalyzer=require("webpack-bundle-analyzer")
      .BundleAnalyzerPlugin;
    module.exports= {
    mode: "production",
    optimization: {
    splitChunks: {
    chunks: "all"    }
      },
    plugins: [newCleanWebpackPlugin(), newWebpackBundleAnalyzer()]
    };