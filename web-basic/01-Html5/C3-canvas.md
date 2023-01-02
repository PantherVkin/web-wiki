# C3-canvas 
# 1 语义化标签

本质是不同含义的div，当做div 使用即可。

**HTML5提供了新的元素来创建更好的页面结构：**

标签描述[<article>](https://www.runoob.com/tags/tag-article.html)定义页面独立的内容区域。[<aside>](https://www.runoob.com/tags/tag-aside.html)定义页面的侧边栏内容。[<bdi>](https://www.runoob.com/tags/tag-bdi.html)允许您设置一段文本，使其脱离其父元素的文本方向设置。[<command>](https://www.runoob.com/tags/tag-command.html)定义命令按钮，比如单选按钮、复选框或按钮[<details>](https://www.runoob.com/tags/tag-details.html)用于描述文档或文档某个部分的细节[<dialog>](https://www.runoob.com/tags/tag-dialog.html)定义对话框，比如提示框[<summary>](https://www.runoob.com/tags/tag-summary.html)标签包含 details 元素的标题[<figure>](https://www.runoob.com/tags/tag-figure.html)规定独立的流内容（图像、图表、照片、代码等等）。[<figcaption>](https://www.runoob.com/tags/tag-figcaption.html)定义 <figure> 元素的标题[<footer>](https://www.runoob.com/tags/tag-footer.html)定义 section 或 document 的页脚。[<header>](https://www.runoob.com/tags/tag-header.html)定义了文档的头部区域[<mark>](https://www.runoob.com/tags/tag-mark.html)定义带有记号的文本。[<meter>](https://www.runoob.com/tags/tag-meter.html)定义度量衡。仅用于已知最大和最小值的度量。[<nav>](https://www.runoob.com/tags/tag-nav.html)定义导航链接的部分。[<progress>](https://www.runoob.com/tags/tag-progress.html)定义任何类型的任务的进度。[<ruby>](https://www.runoob.com/tags/tag-ruby.html)定义 ruby 注释（中文注音或字符）。[<rt>](https://www.runoob.com/tags/tag-rt.html)定义字符（中文注音或字符）的解释或发音。[<rp>](https://www.runoob.com/tags/tag-rp.html)在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。[<section>](https://www.runoob.com/tags/tag-section.html)定义文档中的节（section、区段）。[<time>](https://www.runoob.com/tags/tag-time.html)定义日期或时间。[<wbr>](https://www.runoob.com/tags/tag-wbr.html)规定在文本中的何处适合添加换行符。

# 2 canvas

画板。

[https://www.runoob.com/jsref/dom-obj-canvas.html](https://www.runoob.com/jsref/dom-obj-canvas.html)

**属性和方法：**

> 设置画布大小：行间样式写或js设置。
> 
> `<canvas id="cv" width='400px' height='300px'></canvas>`

**属性、方法**

getContext()
获取画板内容区。参数传 2d。画2d 图形。

`oCv.getContext('2d');`

beginPath()

重新开启一个路径。 

lineWidth = 10

设置当前路径的宽度

moveTo()
 起点
lineTo()
终点
closePath()
闭合，当前一笔完成的图形，闭合。
fill()

填充

stroke()
渲染上
strokeStyle 

rect()

rect() 方法创建矩形。

(x, y, widt, height）

x 矩形左上角的 x 坐标

y 矩形左上角的 y 坐标。

width 矩形的宽度，以像素计。

height 矩形的高度，以像素计。

strokeRect()、fillRect()

直接渲染矩形。

clearRect()
清除之前的动画
arc( 圆心x, 圆心y， 半径, 起始弧度， 结束弧度， 方向)

画圈

## 2.1 矩形

- 画矩形

    <script>varoCv=document.getElementById('cv');
    varctx=oCv.getContext('2d');
    // 1. 方法一// ctx.moveTo(50, 50);// ctx.lineTo(150, 50);// ctx.lineTo(150, 100);// ctx.lineTo(50, 100);// ctx.closePath();// ctx.fill();// ctx.stroke();// 2. 方法二// ctx.rect(100, 100, 200, 100);// ctx.stroke();// 3. 方法三// ctx.strokeRect(100, 100, 200, 100);ctx.fillRect(100, 100, 200, 100);
    </script>

- 矩形向下移动

    <script>varoCv=document.getElementById('cv');
    varctx=oCv.getContext('2d');
    height=100;
    setInterval( function (e) {
    ctx.clearRect(0, 0, 400, 300);
    ctx.fillRect(100, height, 200, 100);
    height+=5;
            }, 100)
    </script>

## 2.2 圈

> `ctx.arc( 圆心x, 圆心y， 半径, 起始弧度， 结束弧度， 方向)` 
> 
> Math.pi 弧度计量单位，顺时针0  逆时针 1 

- 吃豆人

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    ctx.arc(100, 100, 50, 0, Math.PI * 1.8 , 0);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
        </script>

![image.png](data/img/1599809955665-5622021d-af5c-4b85-a598-9e4293f9dc63.png)

## 2.3 圆角矩形

**原理：**

> 起点、终点、圆弧拐的方向点的位置。
> 
> c 只提供一个方向。
> ![image.png](data/img/1599704455959-d6b3bea3-ab92-4e30-85f1-89b74b2d5032.png)

- 圆角矩形

> `context.arcTo(x1,y1,x2,y2,r);`x2,y2  是方向点，只提供一个方向。注意：起点 要让出最后一个圆角的大小。

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    ctx.moveTo(100, 110);
    ctx.arcTo(100, 200, 200, 200, 10);
    ctx.arcTo(200, 200, 200, 100, 10);
    ctx.arcTo(200, 100, 100, 100, 10);
    ctx.arcTo(100, 100, 100, 200, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
        </script>

![image.png](data/img/1599810881890-8f75dffd-4e62-4dd1-9084-fd1586f489f4.png)

## 2.4 贝塞尔曲线

> 最后一个是终点，前面的是控制点。

- 二次贝塞尔曲线

> `ctx.quadraticCurveTo(200, 200, 300, 100);`

- 三次贝塞尔曲线

> `ctx.bezierCurveTo(200, 200, 300, 100, 400, 200);`

## 2.5 其他属性

> 旋转、平移对全局起作用，不是对每一条路径起作用。

rotate()

旋转，参数math.PI  角度。

旋转中心是坐标系原点。默认画布左上角。

translate(x, y)
改变坐标系原点位置：坐标系平移
scale(x, y)

缩放：每一个坐标点都乘以系数。

save()

变换之前调用save。

save 存储当前的坐标平移及旋转状态。

能保存的数据：坐标系的平移数据、缩放数据、旋转数据

resotre()

resotre 恢复所有的平移和旋转状态。

fillStyle 

设置填充的颜色。

fillRect()

createPattern(img , 'no-repeat');
创建纹理。

两个参数：（oImg, 'no-repeat');

填充图片的时候使用。
createLinearGradient(x0, y0, x1, y1)
线性渐变。

x0 渐变开始点的 x 坐标；

y0 渐变开始点的 y 坐标；

x1 渐变结束点的 x 坐标；

y1 渐变结束点的 y 坐标；
createRadialGradient(x0, y0, r0, x1, y1, r1);

strokeText()

文字瞄边

fillText()

文字填充

- 旋转变换

> 注意：坐标系的变化。及`save()`、`restore()` 的使用。

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.save();
            // 旋转坐标后填充
    ctx.translate(100 ,100);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.strokeRect(0 , 0, 100, 50);
            // 新路径、恢复坐标后填充
    ctx.beginPath();
    ctx.restore();
    ctx.fillRect(200 , 0, 100, 50);
        </script>

![image.png](data/img/1599822303993-b343836a-13a4-4363-bad2-7d251cce9303.png)

- 填充

> 填充图片：    先创建一个纹理。
> 
> 把图片变成纹理，在填充。
> 
> 是以坐标系原点进行填充的。

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    varimg = newImage();
    img.src = './DU.jpg';
    img.onload = function () {
    ctx.beginPath();
    ctx.translate( 100, 100);
    varbg = ctx.createPattern(img , 'no-repeat');
    ctx.fillStyle = bg;
    ctx.fillRect(0 , 0, 200, 150);
            }
        </script>

![image.png](data/img/1599823244331-3479da49-3f70-4537-a8ca-60ba698a8b46.png)

- 线性渐变

> 创建一个线性渐变。
> 
> `addColorStop(0, 'red');` 添加关键帧。取值范围：`[0, 1]`

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    varbg = ctx.createLinearGradient(0, 0, 200, 0);
    bg.addColorStop(0, 'red');
    bg.addColorStop(0.5, 'blue');
    bg.addColorStop(1, 'black');
    ctx.fillStyle = bg;
    ctx.fillRect(0 , 0, 200, 150);
        </script>

![image.png](data/img/1599823402209-0afb420d-07da-45ea-b4a4-f478f971c8b4.png)

- 辐射渐变

> 起始圆，半径，结束圆，半径

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    vargrd=ctx.createRadialGradient(100,75,10,100,75,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"#0ff");
            // Fillwithgradientctx.fillStyle=grd;
    ctx.fillRect(10,10,200,150);
        </script>

![image.png](data/img/1599829294157-5761687d-f89a-4ff3-9017-b957df64d09d.png)

- 阴影

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    ctx.shadowColor = 'blue';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fillRect(10, 10, 200, 150);
        </script>

![image.png](data/img/1599830134090-635589e4-af6a-4c10-80ce-1920afa2822c.png)

- 渲染文字

> `strokeText()`       文字瞄边
> 
> `fillText()`           文字填充

        <script>
    varoCv = document.getElementById('cv');
    varctx = oCv.getContext('2d');
    ctx.font = '30px Georgia';
    ctx.strokeText('DUYI', 100, 100);
    ctx.fillStyle = "red";
    ctx.fillText('DUYI', 100, 200);
        </script>

![image.png](data/img/1599830472346-ccdddfe5-b79b-404a-9012-59a2536d2d42.png)

- 线端样式

> lineCap: 线的两端样式。round、square、butt
> 
> 
> 
> 
> lineJoin： 线段交汇。bevel（斜角）、round（圆角）、miter（尖角）
> 
> 
> 
> 
> miterLimit：尖角截断。