# 04-requestAnimationFra 
# 1 requestAnimationFrame

**屏幕刷新频率:**

> 屏幕刷新的频率：每秒60次。

> 如果变化，一秒超过60次，必然会有一些动画帧被丢掉。

**requestAnimationFrame()：**

> `requestAnimationFrame()` 动画优化。
> 
> 兼容性极差，几乎用不到。

- 调用一次

> 相当于setTimeout 。 只移动了一次。

![image.png](data/img/1601302105875-de770dd0-cc31-4f45-bbbe-d2f2615ccbf2.png)

- 持续调用

> 移动是均匀的。因为requestAnimationFra  是每秒60帧

![image.png](data/img/1601302077041-2d65ecf4-a757-46b3-bb70-44d0d4ff06ab.png)

> 模拟

![image.png](data/img/1601302250584-fedba4ac-3693-44f0-bf83-170cde008dd7.png)

- 清除移动

![image.png](data/img/1601302338754-4ae54a66-3f42-4248-8dee-5aebc11a5310.png)