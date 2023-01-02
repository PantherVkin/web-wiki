# C4-svg 
# 1 svg

[https://www.runoob.com/svg/svg-tutorial.html](https://www.runoob.com/svg/svg-tutorial.html)

**svg和canvas的区别？**

> svg： 矢量图，放大不会失真。适合大面积的贴图。通常动画较少、较简单。标签和css 绘制。
> 
> 
> 
> 
> canvas：适合小面积的绘图，适合动画。js绘制。

**标签：**

- 矩形 <rect>
- 圆形 <circle>
- 椭圆 <ellipse>
- 线 <line>
- 折线 <polyline>
- 多边形 <polygon>
- 路径 <path>

## 1.1 线

> `<line x1="50px" y1="50px" x2="100px" y2="100px" class="line1" style="stroke: #0ff;"></line>`
> 
> 
> 
> 
> 需设置stroke 样式才会显示。
> 
> - x1 属性在 x 轴定义线条的开始
> - y1 属性在 y 轴定义线条的开始
> - x2 属性在 x 轴定义线条的结束
> - y2 属性在 y 轴定义线条的结束

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <linex1="50px"y1="50px"x2="100px"y2="100px"class="line1"style="stroke: #0ff;"></line>
        </svg>
    </body>

![image.png](data/img/1599832482461-6a675cda-c2b2-47ab-83f5-f4758b2d3c04.png)

## 1.2 矩形

> rx 
> 
> ry 圆角。

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <rectx="10px"y="10px"width="100px"height="80px"rx="10"ry="20"></rect>
        </svg>
    </body>

![image.png](data/img/1599832813997-2244924c-a9d4-4135-825e-6967cd22df54.png)

- 不填充的样式

> `style="fill: transparent; stroke: blue;"`

![image.png](data/img/1599835353369-fe43cf49-8ca2-4974-ba77-36ff5ef0b51c.png)

## 1.3 圆、椭圆

- cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
- r属性定义圆的半径
- CX属性定义的椭圆中心的x坐标
- CY属性定义的椭圆中心的y坐标
- RX属性定义的水平半径
- RY属性定义的垂直半径

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <circler="30"cx="40"cy="50"></circle>
            <ellipsecx="150"cy="50"rx="40"ry="30"></ellipse>
        </svg>
    </body>

![image.png](data/img/1599835638844-562c0abb-5bf8-4b0e-8745-855ede0e5be1.png)

## 1.4 折线

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <polylinepoints="0 0, 50 50, 50 100, 100 100, 100,50"style="fill: transparent; stroke: #0ff;"></polyline>
        </svg>
    </body>

![image.png](data/img/1599835758234-8595de51-2a1f-42e7-b123-71f0622c8dfa.png)

## 1.5 多边形

> ​`<polygon>`​ 标签用来创建含有不少于三个边的图形。
> 
> points: 定义多边形每个角的 x 和 y 坐标

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <polygonpoints="0 0, 50 50, 50 100, 100 100, 100,50"style="fill: transparent; stroke: #0ff;"></polygon>
        </svg>
    </body>

![image.png](data/img/1599836402710-5b1ca307-c5bf-456f-8870-6120d616ae00.png)

## 1.6 文本

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <textx="100"y="70"style="color: #0ff">DUYI</text>
        </svg>
    </body>

![image.png](data/img/1599836521961-84166b99-28ee-4125-9c1d-046fa0382c91.png)

## 1.7 Stroke 属性

> - stroke
> - stroke-width
> - stroke-opacity:
> - stroke-linecap
> - stroke-linejoin
> - stroke-dasharray    创建虚线。

- 虚线

> 线条、空白 依次根据数组的值取值。

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <linex1="10px"y1="50px"x2="180px"y2="50px"class="line1"style="stroke: #0ff; stroke-dasharray: 10px 20px 30px 40px; " ></line>
        </svg>
    </body>

![image.png](data/img/1599868712972-604fabd4-4145-4666-a80e-7d8d8b2c58bf.png)

- 偏移

> `stroke-dashoffset:` 向左偏移。

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <linex1="10px"y1="50px"x2="180px"y2="50px"class="line1"style="stroke: #0ff; stroke-dasharray: 10px 20px 30px 40px; stroke-dashoffset: 5px;" ></line>
        </svg>
    </body>

![image.png](data/img/1599868763060-fe8e9cf4-766d-45f3-b25e-3ca5703d513e.png)

## 1.8 路径

<path> 元素用于定义一个路径。

下面的命令可用于路径数据：

- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto    
- A = elliptical Arc    以M为起点 A rx ry 旋转角度 大弧/小弧 顺时针/逆时针  A 100 50 0 1 1   1大弧 0小弧
- Z = closepath

**注意：**以上所有命令均允许小写字母。大写表示绝对位置，小写表示相对位置。

![image.png](data/img/1599837325447-8e837124-82f1-4643-9987-0c394c7e15e6.png)

![image.png](data/img/1599837748020-7881b8f2-d904-4c34-ae5a-948cb183d184.png)

## 1.9 线性渐变

defer 定义

**代码解析：**

- <linearGradient>标签的id属性可为渐变定义一个唯一的名称
- <linearGradient>标签的X1，X2，Y1，Y2属性定义渐变开始和结束位置
- 渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个<stop>标签来规定。offset属性用来定义渐变的开始和结束位置。
- 填充渐变：`fill: url(#bg1)`

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <defs>
                <linearGradientid="bg1"x1='0'y1='0'x2='100%'y2='100%'>
                    <stopoffset="0%"style="stop-color: #f40;"></stop>
                    <stopoffset="100%"style="stop-color: #0ff;"></stop>
                </linearGradient>
            </defs>
            <rectx='10'y='10'height='100'width='200'style="fill: url(#bg1)"></rect>
        </svg>
    </body>

![image.png](data/img/1599869402717-c0cc916a-e54f-4095-979b-ea1135f322e4.png)

## 1.10 高斯模糊

**代码解析：**

- <filter>元素id属性定义一个滤镜的唯一名称
- <feGaussianBlur>元素定义模糊效果
- in="SourceGraphic"这个部分定义了由整个图像创建效果
- stdDeviation属性定义模糊量
- <rect>元素的滤镜属性用来把元素链接到"f1"滤镜

    <body>
        <svgwidth="200px"height="150px"style="border: 1px solid #f40;">
            <defs>
                <linearGradientid="bg1"x1='0'y1='0'x2='100%'y2='100%'>
                    <stopoffset="0%"style="stop-color: #f40;"></stop>
                    <stopoffset="100%"style="stop-color: #0ff;"></stop>
                </linearGradient>
                <filterid="gs">
                    <feGaussianBlurin="SourceGraphic"stdDeviation="20"></feGaussianBlur>
                </filter>
            </defs>
            <rectx='10'y='10'height='100'width='200'style="fill: url(#bg1); filter: url(#gs);"></rect>
        </svg>
    </body>

## 1.11 viewBox比例尺

用viewBox 里的width、height 代替 svg 设置的width、height。

x="左上角嵌入（默认为0）"
y="左上角嵌入（默认为0）"
width="SVG片段的宽度（默认为100％）"
height="SVG片段的高度（默认为100％）"
viewBox="点"seen"这个SVG绘图区域。由空格或逗号分隔的4个值。 (min x, min y, width, height)"