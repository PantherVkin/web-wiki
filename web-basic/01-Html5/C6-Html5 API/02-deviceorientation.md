# 02-deviceorientation 
# 1 简单服务器

> express 默认访问index.html
> 
> 
> 
> 
> 命令行启动：`node server.js`

    varexpress=require('express');
    varapp=newexpress();
    app.use(express.static('./page'));
    app.listen(80);

# 2 deviceorientation

**陀螺仪：**

> 只有带有陀螺仪的设备才支持体感。

- `deviceorientation` 事件

> 陀螺仪运动轨迹。

![image.png](data/img/1601300453646-2bd3429c-5aeb-4909-88b5-2611d2e02d47.png)

![image.png](data/img/1601300775312-e1a7b225-be63-431d-9ffd-51377b576db1.png)

倒着立起来值是-90 

![image.png](data/img/1601301016239-3ffe5819-836f-4dc6-a9a8-5d489b9043f1.png)

作业：指南针。