# 01-geoLocation 
# 1 geoLocation

**geoLocation：**

> 获取地理信息
> 
> 一些系统不支持这个功能。
> 
> 定位GPS，台式机几乎都没有GPS，笔记本绝大多数都没有GPS，智能手机几乎都有GPS。
> 
> 可以通过网络来粗略的估计地理位置。

- ​`window.navigator.geolocation.geteCurrentPositon(callbackSuccess, callbackError)`​

    window.navigator.geolocation.getCurrentPosition( (pos) => {
    console.log('获取地理信息成功')
    console.log(pos);
            }, () => {
    console.log('获取地理信息失败')
            })

**注意：**

> 获取的周期比较长。

> ​`https、​file​`​协议 可以获取。

> ​`http`​ 协议是不能获取地理信息位置的。
> 
> 
> 
> 
> 网页本身没有获取的能力，需借助浏览器。

> 如果使用谷歌浏览器：谷歌浏览器获取地理位置，使用的是谷歌地图。

- 使用​`https`​ 获取

> 需要在https 的域下。

> 翻墙后获取。

![image.png](data/img/1601299530291-51fa3894-a4cd-4b4b-a753-30e9dc0c0b64.png)

- 位置信息

> longitude: 能够大于90度的就是经度。最大值180.

> latitude: 纬度最大值是90.

> accuaracy: 精度。准确度。

![image.png](data/img/1601299666619-106bd3a0-ecd7-4f22-8e91-0fd5d9f99fbc.png)