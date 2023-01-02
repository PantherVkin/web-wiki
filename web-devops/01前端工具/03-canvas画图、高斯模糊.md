# canvas里画图、高斯模糊 
# 1 在canvas里画图

## 1.1 drawImage

**drawImage()：**

- 3个参数

> `drawImage(图片对象, 图片起点x轴, 图片起点y轴);`

    // drawImage(图片对象, 图片起点x轴, 图片起点y轴);context.drawImage(img, 50, 50);

- 5个参数

> `drawImage(图片对象, 图片起点x轴, 图片起点y轴, 图片宽度, 图片高度);`

    //drawImage(图片对象, 图片起点x轴, 图片起点y轴, 图片宽度, 图片高度);context.drawImage(img,50,50,200,200);

- 9个参数

> `drawImage(图片对象, 图片上x轴位置, 图片上y轴位置, 图片宽度, 图片高度, canvas的x轴, canvas的y轴, canvas里图片显示的宽度, canvas里图片显示的高度);`
> 
> 取图片中的某个区域 ，画在哪， 大小

    //drawImage(图片对象, 图片上x轴位置, 图片上y轴位置, 图片宽度, 图片高度, canvas的x轴, canvas的y轴, canvas里图片显示的宽度, canvas里图片显示的高度);context.drawImage(img, 450, 70, 130, 150, 0, 0, 400, 400);

## 1.2 导出图片

**`canvas.toDataURL()`****：**

> 导出格式：base64 ，64个字符，表达一个二进制文件。
> 
> 注意：导出方法放在canvas身上

    <body><canvasid="canvas"width="500"height="500"style="border: 1px solid #000"></canvas><imgsrc=""alt=""style="border: 1px solid #f40;"><script>varcanvas=document.getElementById('canvas');
    varcontext=canvas.getContext('2d');
    varimg=newImage();
    img.src='images/img_01.jpg';
    img.onload=function () {
    //1、在canvas里画图// //drawImage(图片对象, 图片上x轴位置, 图片上y轴位置, 图片宽度, 图片高度, canvas的x轴, canvas的y轴, canvas里图片显示的宽度, canvas里图片显示的高度);context.drawImage(img, 450, 70, 130, 150, 0, 0, 400, 400);
    //2、导出图片varimgSrc=canvas.toDataURL();    //这个方法要注意：它是放在canvas身上的，并不是context身上！！！// console.log(imgSrc);varnewImg=document.querySelector('img');
    newImg.src=imgSrc;
            }
    </script></body>

![image.png](data/img/1602660626741-06e14233-c553-4b40-be1c-f5b5b9daa671.png)

## 1.3 像素操作

- 获取 

> `getImageData(起点x,起点y,宽,高)`
> 
> 从哪个点开始取，取多大

    //getImageData(起点x,起点y,宽,高)varpxInfo=context.getImageData(0, 0, 500, 500);
    console.log(pxInfo);    //500*500=250000*4=100000   rgba    0-255

![image.png](data/img/1602660878786-f45e775e-2a65-463b-9745-ec904f909763.png)

- 添加

> `putImageData(pxInfo, 50, 50);`
> 
> 画到哪个点

    //getImageData(起点x,起点y,宽,高)varpxInfo=context.getImageData(0, 0, 500, 500);
    console.log(pxInfo);    //500*500=250000*4=100000   rgba    0-255//把像素信息对象放到canvas的50,50的位置上context.putImageData(pxInfo, 50, 50);

# 2 高斯模糊

[📎gaussBlur.js](https://www.yuque.com/attachments/yuque/0/2020/js/714097/1602661398313-f6b6b8a7-c631-402e-af87-464d8dcd1cb6.js)

    <body><divid="box"style="width: 300px; height: 300px; border: 1px solid #000; background-size: cover"></div><scriptsrc="js/gaussBlur.js"></script><script>varimg=newImage();
    img.src='images/img_01.jpg';
    img.onload=function () {
    window.player.blurImg(img, document.getElementById('box'));
            }
    </script></body>

![image.png](data/img/1602661377188-2b893818-3a84-498a-8413-29fdd2c799a0.png)