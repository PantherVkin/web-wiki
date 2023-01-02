# 07-worker 
# 1 worker

**worker:**

> worker 是多线程的，是真的多线程，不是伪多线程。
> 
> worker 不能操作dom,没有window对象，不能读取本地文件。可以发ajax，可以计算。

**在worker中能否继续创建worker？**

> 在理论上是可以的。但是实际上没有任何一款浏览器支持。

**计算案例：**

- 直接计算

    console.log('=====================');
    console.log('=====================');
    letresult=0;
    letcount=1000000;
    for ( leti=0; i<count; i++) {
    result+=i;
            }
    console.log(result);
    console.log('=====================');
    console.log('=====================');

![image.png](data/img/1601365978977-6ecc11f8-ddab-423a-a379-1dad21c6546a.png)

- 使用worker

> 主线程和辅线程之间用 ​`postMessage()`​ 发送消息。用​`onMessage()`​ 接受消息。

- 主线程

    console.log('=====================');
    console.log('=====================');
    letcount=1000000;
    letworker=newWorker('./work.js')
    worker.postMessage({
    num: count,
            })
    worker.onmessage=function(e) {
    console.log(e.data);
            }
    console.log('=====================');
    console.log('=====================');

- 辅线程:work.js

    this.onmessage=function (e) {
    letresult=0;
    for ( leti=0; i<e.data.num; i++) {
    result+=i;
        }
    this.postMessage(result);
    }

![image.png](data/img/1601366377758-0a6f95ff-737b-42a6-9cc2-208bc4b2c4b5.png)

- 停止工作

> 主线程中：​`worker.terminate()`​
> 
> 辅线程中：​`this.close()`​   （自己停止）