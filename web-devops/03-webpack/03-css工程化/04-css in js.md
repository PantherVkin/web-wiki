# 04-css in js 
# 1 css in js

**css in js 的核心思想是：**

> 用一个JS对象来描述样式，而不是css样式表。

> 例如下面的对象就是一个用于描述样式的对象：

    conststyles= {
    backgroundColor: "#f40",
    color: "#fff",
    width: "400px",
    height: "500px",
    margin: "0 auto"}

> 由于这种描述样式的方式**根本就****不存在类名**，自然不会有类名冲突。

> 至于如何把样式应用到界面上，不是它所关心的事情，你可以用任何技术、任何框架、任何方式将它应用到界面。

> 后续学习的vue、react都支持css in js，可以非常轻松的应用到界面。

**css in js的特点：**

- 绝无冲突的可能

> 由于它根本不存在类名，所以绝不可能出现类名冲突

- 更加灵活

> 可以充分利用JS语言灵活的特点，用各种招式来处理样式

- 应用面更广

> 只要支持js语言，就可以支持css in js，因此，在一些用JS语言开发移动端应用的时候非常好用，因为移动端应用很有可能并不支持css

- 书写不便

> 书写样式，特别是公共样式的时候，处理起来不是很方便

- 在页面中增加了大量冗余内容

> 在页面中处理css in js时，往往是将样式加入到元素的style属性中，会大量增加元素的内联样式，并且可能会有大量重复，不易阅读最终的页面代码

**案例：**

- common.js

    exportconstredBg= {
    backgroundColor: "#f40",
    color: "#fff",
    }
    exportfunctionborder(width=2, color="#333") {
    return {
    border: `${width}px solid ${color}`    }
    }

- util.js

    /*** 给某个dom元素应用一个样式* @param {*} dom dom元素* @param {*} styles 样式对象*/exportfunctionapplyStyles(dom, ...styles) {
    lettargetStyles= {}; //最终合并的样式对象for (conststyleofstyles) {
    targetStyles= {
    ...targetStyles,
    ...style        }
        }
    for (constkeyintargetStyles) {
    constvalue=targetStyles[key];
    dom.style[key] =value;
        }
    }

- index.js

    import { applyStyles } from"./css/util.js"import { border, redBg } from"./css/common.js"constdiv1=document.getElementById("div1");
    constdiv2=document.getElementById("div2");
    conststyles= {
    width: "400px",
    height: "500px",
    margin: "0 auto"}
    applyStyles(div1, styles, border(), redBg)
    applyStyles(div2, styles, border(5, "green"))