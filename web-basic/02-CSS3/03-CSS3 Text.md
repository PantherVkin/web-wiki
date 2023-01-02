# CSS3 Text 
# Text

## text-shadow

> `text-shadow: xOffset yOffset blur color;`
> 
> 文字阴影在背景上面，在文字下面。

**案例：**浮雕效果 

    text-shadow: 1px1px#000,
    -1px-1px#fff;

**案例：**镂刻效果 

    text-shadow: -1px-1px#000,
    1px1px#fff;

**案例：文字剪切背景图片的问题？**

> 设置 `-webkit-background-clip: text;`文字就变成背景的一部分；
> 
> `text-shadow`文字阴影在背景上面，在文字下面。

## font-face

外部字体包。

    @font-face {
    font-family: 给字体包起的名字；
    src: url();
    }

**扩展：**字体后缀

> truetype         .ttf            微软、苹果
> 
> opentype        .opt          微软、abode   truetype 的升级版本
> 
> woff               .woff        truetype、opentype的合集版本
> 
>                      .eat          ie 

>                      .svg          h5 

> 

> 浏览器借助MIME 协议，请求操作系统支持，打开相关文件。

## 多列

`columns: column-width  column-count`

> `column-width、column-count`  不一起使用。