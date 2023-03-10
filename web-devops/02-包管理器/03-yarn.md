# 03-yarn 
# 1 yarn简介

**yarn简介：**

> yarn 官网：[https://www.yarnpkg.com/zh-Hans/](https://www.yarnpkg.com/zh-Hans/)
> 
> yarn 是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，**它****仍然使用 npm 的****registry**，不过提供了全新 CLI 来对包进行管理
> 
> 过去，yarn 的出现极大的抢夺了 npm 的市场，甚至有人戏言，npm 只剩下一个 registry 了。

**之所以会出现这种情况，是因为在过去，npm 存在下面的问题：**

- 依赖目录嵌套层次深

> 过去，npm 的依赖是嵌套的，这在 windows 系统上是一个极大的问题，由于众所周知的原因，windows 系统无法支持太深的目录

- 下载速度慢

> 由于嵌套层次的问题，所以npm对包的下载只能是串行的，即前一个包下载完后才会下载下一个包，导致带宽资源没有完全利用

> 多个相同版本的包被重复的下载

- 控制台输出繁杂

> 过去，npm 安装包的时候，每安装一个依赖，就会输出依赖的详细信息，导致一次安装有大量的信息输出到控制台，遇到错误极难查看

- 工程移植问题

> 由于 npm 的版本依赖可以是模糊的，可能会导致工程移植后，依赖的确切版本不一致。

**针对上述问题，yarn 从诞生那天就已经解决，它用到了以下的手段：**

- 使用扁平的目录结构
- 并行下载
- 使用本地缓存
- 控制台仅输出关键信息
- 使用`yarn-lock`文件记录确切依赖

**不仅如此，yarn还优化了以下内容：**

- 增加了某些功能强大的命令
- 让既有的命令更加语义化
- 本地安装的CLI工具可以使用 yarn 直接启动
- 将全局安装的目录当作一个普通的工程，生成package.json文件，便于全局安装移植

yarn 的出现给 npm 带来了巨大的压力，很快，npm 学习了 yarn 先进的理念，不断的对自身进行优化，到了目前的npm6版本，几乎完全解决了上面的问题：

- 目录扁平化
- 并行下载
- 本地缓存
- 使用package-lock记录确切依赖
- 增加了大量的命令别名
- 内置了npx，可以启动本地的CLI工具
- 极大的简化了控制台输出

**总结：**

npm6 之后，可以说npm已经和yarn非常接近，甚至没有差距了。很多新的项目，又重新从yarn转回到npm。

这两个包管理器是目前的主流，都必须要学习。

# 2 yarn 的核心命令

**常用命令：**

- **初始化**

> 初始化：`yarn init [--yes/-y]`

- **安装**

> 添加指定包：`yarn [global] add package-name [--dev/-D] [--exact/-E]`

> 安装package.json中的所有依赖：`yarn install [--production/--prod]`

- **脚本和本地CLI**

> 运行脚本：`yarn run 脚本名`

> start、stop、test可以省略run

> 运行本地安装的CLI： `yarn run CLI名`

- **查询**

> 查看bin目录：`yarn [global] bin`

> 查询包信息：`yarn info 包名 [子字段]`

> 列举已安装的依赖：`yarn [global] list [--depth=依赖深度]`

> yarn的list命令和npm的list不同，yarn输出的信息更加丰富，包括顶级目录结构、每个包的依赖版本号

- **更新**

> 列举需要更新的包：`yarn outdated`

> 更新包：`yarn [global] upgrade [包名]`

- **卸载**

> 卸载包：`yarn remove 包名`

# 3 yarn 的特别礼物

**其他命令：**

> 在终端命令上，yarn不仅仅是对npm的命令做了一个改名，还增加了一些原本没有的命令，这些命令在某些时候使用起来非常方便

- **yarn check**

> `yarn check` ：可以验证package.json文件的依赖记录和lock文件是否一致

> 这对于防止篡改非常有用

- **yarn audit**

> `yarn audit` ：可以检查本地安装的包有哪些已知漏洞，以表格的形式列出，漏洞级别分为以下几种：

> INFO：信息级别

> LOW: 低级别

> MODERATE：中级别

> HIGH：高级别

> CRITICAL：关键级别

- **yarn why**

> `yarn why 包名` ：可以在控制台打印出为什么安装了这个包，哪些包会用到它

- **yarn create**

> 非常有趣的命令

> 今后，我们会学习一些脚手架，所谓脚手架，就是使用一个命令来搭建一个工程结构

> 过去，我们都是使用如下的做法：

> 1. 全局安装脚手架工具

> 1. 使用全局命令搭建脚手架

> 由于大部分脚手架工具都是以`create-xxx` 的方式命名的，比如react的官方脚手架名称为`create-react-app`

> 因此，可以使用`yarn create`命令来一步完成安装和搭建

    例如：yarncreatereact-appmy-app# 等同于下面的两条命令yarnglobaladdcreate-react-appcreate-react-appmy-app