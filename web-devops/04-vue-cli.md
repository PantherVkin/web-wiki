# Vue-cli 
# 代码压缩

- 先安装插件

`npm i -D uglifyjs-webpack-plugin`

- 然后在最上方引入依赖

    const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

- 在**configureWebpack **模块中引入代码压缩

      configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;
        // 代码压缩
          config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    //生产环境自动删除console
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    }
                },
                sourceMap: false,
                parallel: true
            })
          )
        return {
          plugins: [
          ],
          output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
          }
        };
      },

# 关闭预加载

      // 关闭预加载
      chainWebpack: config => {
        config.plugins.delete('prefetch')
      },
    

# 代码拆分

[https://juejin.cn/post/6844903728374546445#heading-8](https://juejin.cn/post/6844903728374546445#heading-8)

      configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;
          // 代码拆分
          config.optimization = {
            splitChunks: {
              chunks: 'all',   // initial、async和all
              minSize: 30000,   // 形成一个新代码块最小的体积
              maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
              maxInitialRequests: 3,   // 最大初始化请求数
              automaticNameDelimiter: '~',   // 打包分割符
              name: true,
              cacheGroups: {
                vue: {
                  name: 'vue',
                  test: /[\\/]node_modules[\\/]vue[\\/]/,
                  priority: -10,
                  enforce: true
                },
                vuex: {
                  name: 'vuex',
                  test: /[\\/]node_modules[\\/]vuex[\\/]/,
                  priority: -10,
                  enforce: true
                },
                'vue-router': {
                  name: 'vue-router',
                  test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                  priority: -10,
                  enforce: true
                },
                'element-ui': {
                  name: 'element-ui',
                  test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                  priority: -10,
                  enforce: true
                },
                'vendors': {
                  name: 'vendors',
                  test: /[\\/]node_modules[\\/]/,
                  priority: -20,
                  enforce: true
                }
              }
            }
          }
        // webpack 配置
        return {
          plugins: [],
          output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
          }
        };
      },

# 打包结果分析

    npm install webpack-bundle-analyzer -D 

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    
    module.exports = {
      configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;
    
        // webpack 配置
        return {
          plugins: [
            new BundleAnalyzerPlugin()
          ],
          output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
          }
        };
      },
    };
    

# 参考

[https://juejin.cn/post/6844904071896236040#heading-18](https://juejin.cn/post/6844904071896236040#heading-18)

[https://cli.vuejs.org/zh/config/#css-loaderoptions](https://cli.vuejs.org/zh/config/#css-loaderoptions)