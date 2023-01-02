# 01-babel的安装和使用 
# 1 babel的安装和使用

> 官网：[https://babeljs.io/](https://babeljs.io/)
> 
> 民间中文网：[https://www.babeljs.cn/](https://www.babeljs.cn/)

## 1.1 babel简介

**前端开发面临着这样的困境？**

> 不同版本的浏览器能识别的ES标准并不相同，就导致了开发者面对不同版本的浏览器要使用不同的语言。

babel的出现，就是用于解决这样的问题，它是一个编译器，可以把不同标准书写的语言，编译为统一的、能被各种浏览器识别的语言。

![image.png](../../.gitbook/assets/1603106807963-acf39ca6-020a-4bcd-aecd-8b63b86fac23.png)

由于语言的转换工作灵活多样，babel的做法和postcss、webpack差不多，它本身仅提供一些分析功能，真正的转换需要依托于插件完成。

![image.png](../../.gitbook/assets/1603106841811-d9be1814-d8dc-4900-af77-5d85da494082.png)

## 1.2 babel的安装

**安装：**

> babel可以和构建工具联合使用，也可以独立使用。

- 独立安装

> 如果要独立的使用babel，需要安装下面两个库：
> 
> @babel/core：babel核心库，提供了编译所需的所有api
> 
> @babel/cli：提供一个命令行工具，调用核心库的api完成编译

    npmi-D@babel/core@babel/cli

## 1.3 babel的使用

**使用：**

> @babel/cli的使用极其简单，它提供了一个命令`babel`

- 按文件编译

> `babel 要编译的文件 -o 编辑结果文件`

    npxbabeljs/a.js -ojs/b.js

- 按目录编译

> `babel 要编译的整个目录 -d 编译结果放置的目录`

    npxbabeljs-ddist

## 1.4 babel的配置

**配置：**

> 可以看到，babel本身没有做任何事情，真正的编译要依托于**babel插件**和**babel预设**来完成。
> 
> 
> 
> 
> babel预设和postcss预设含义一样，是多个插件的集合体，用于解决一系列常见的兼容问题。

- `.babelrc`

> 如何告诉babel要使用哪些插件或预设呢？需要通过一个配置文件`.babelrc`

    {
    "presets": [],
    "plugins": []
    }