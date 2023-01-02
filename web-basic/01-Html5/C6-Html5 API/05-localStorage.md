# 05-localStorage 
# 1 localStorage

**localStorage 和 cookie:**

- cookie

> 每次请求的时候都有可能传送很多无用的信息到后端。
> 
> 存储的内容较小，约4K。

- localStorage

> 只能存储字符串。
> 
> 发送请求的时候不会把数据发出去。
> 
> 存放较多的内容。5M左右。
> 
> 长期存放在浏览器的，写入local Storage（无论窗口是否关闭都会存储）

    localStorage.name='DUYI';
    localStorage.setItem('name', 'DUUU');
    localStorage.getItem('name');               // 获取localStorage.removeItem('name');        // 删除

- sessionStorage

> 会话临时需要存储的变量。
> 
> 每次窗口关闭的时候，sessionStorage 都会自动清空。

    sessionStorage.name='DUYI';