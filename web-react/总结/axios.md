# axios 
# 1 Axios

Axios是一个基于promise的HTTP库。

浏览器支持情况：Chrome、Firefox、Safari、Opera、Edge、IE8+。

## 1.1 使用

**Axios：**

- 引入

    <scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script>

- API

> `axios(config)`
> 
> `axios(url, [config)`

- config 配置对象

> 最常用的配置：

    axios({
    method: 'get', // post、get、put....baseURL: '', // 请求的域名，基本地址url: '', // 请求的路径params: {}, // 会将请求参数拼接在url上data: {}, // 会将请求参数放在请求体中headers: {}, // 设置请求头，例如设置token等timeout: 1000, // 设置请求超时时长，单位：ms})
    
    <body><divid="app"><button@click="getData">发送get请求</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    axios({
    method: 'get',
    baseURL: 'https://developer.duyiedu.com/vue',
    url: '/getUserInfo'                    }).then( data=> {
    console.log(data)
                        })
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603757586203-c8f2971e-affc-4a88-bfb3-4554fdbc701f.png)

- 方法别名

> 为方便起见，为所有支持的请求方法提供了别名。

    axios.request(config)
    axios.get(url, [config])
    axios.post(url, [data], [config]])
    axios.delete(url, [config])
    axios.head(url, [config])
    axios.put(url, [data], [config])
    axios.patch(url, [data], [config]])
    axios.options(url, [config])

> `axios.post(url, [data], [config]])`

    <body><divid="app"><button@click="getData">发送post请求</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    // axios.post(url, [data], [config]])axios.post('/setUserInfo', { name: 'XD', mail: 'XD@duyi.com' }, {                        
    baseURL: 'https://developer.duyiedu.com/vue',
                        }).then( data=> {
    console.log(data)
                        })
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603757793478-8bc5c47f-8b4e-4085-92fa-c53832f922ea.png)

## 1.2 配置默认值

**配置默****认值：**

> 可以指定将被用在各个请求的配置默认值。

- 全局配置

> 在实际项目中，很少用全局配置。

    axios.defaults.baseURL='https://developer.duyiedu.com/vue';
    axios.defaults.timeout=1000;

- 实例配置

> 可以使用自定义配置新建一个axios实例。

    constinstance=axios.create({
    baseURL: 'https://developer.duyiedu.com/vue',
    timeout: 1000,
    })
    instance.get('/getUserInfo').then(res=> {
    // ...})

- 请求配置

    constinstance=axios.create();
    instance.get('/getUserInfo', {
    timeout: 5000})

- 配置的优先顺序

> 全局 < 实例 < 请求

## 1.3 并发

**并发：**

> 同时进行多个请求，并统一处理返回值。
> 
> `axios.all(iterable)`

> `axios.spread(callback)`

- 语法

    axios.all([
    axios.get('/a'),
    axios.get('/b')
    ]).then(axios.spread((aRes, bRes) => {      // 参数由请求数决定console.log(aRes, bRes);
    }))

- 案例

    <body><divid="app"><button@click="getData">发送并发请求</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>axios.defaults.baseURL='https://developer.duyiedu.com/vue';
    axios.defaults.timeout=1000;
    constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    axios.all([
    axios.post('/setUserInfo', {name: 'shanshan', mail: 'haah@qq.com'}),
    axios.get('/getUserInfo'),
                        ]).then(axios.spread((postRes, getRes ) => {
    console.log('postRes：',postRes);
    console.log('getRes：',getRes);
                        }));
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603758517035-40275513-48f4-4515-96f2-012df94e2f21.png)

## 1.4 拦截器

**拦截器：**

> interceptors，在发起请求之前做一些处理，或者在响应回来之后做一些处理。

- 请求拦截器

    axios.interceptors.request.use(config=> {
    // 在发送请求之前做些什么returnconfig;
    })

    <body><divid="app"><button@click="getData">请求拦截器</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>axios.interceptors.request.use(config=> {
    // 在发送请求之前做些什么config.method='get',
    config.url='/getUserInfo'console.log('请求拦截器修改post ==> get。')
    returnconfig;
            })
    constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    // axios.post(url, [data], [config]])axios.post('/setUserInfo', { name: 'XD', mail: 'XD@duyi.com' }, {                        
    baseURL: 'https://developer.duyiedu.com/vue',
                        }).then( data=> {
    console.log(data)
                        })
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603760311142-72b45f3c-fbaf-429a-9dbe-991b7b900132.png)

- 响应拦截器

    axios.interceptors.response.use(response=> {
    // 对响应数据做点什么returnresponse;
    })

    <body><divid="app"><button@click="getData">响应拦截器</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>axios.interceptors.request.use(config=> {
    // 在发送请求之前做些什么config.method='get',
    config.url='/getUserInfo'console.log('请求拦截器修改post ==> get。')
    returnconfig;
            })
    axios.interceptors.response.use(response=> {
    // 对响应数据做点什么returnresponse.data;
            })
    constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    // axios.post(url, [data], [config]])axios.post('/setUserInfo', { name: 'XD', mail: 'XD@duyi.com' }, {                        
    baseURL: 'https://developer.duyiedu.com/vue',
                        }).then( data=> {
    console.log(data)
                        })
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603760476363-a8676c6f-39fa-47a5-9fb9-b18253d9a9cb.png)

- 移除拦截器

    constmyInterceptor=axios.interceptors.request.use(config=> {});
    axios.interceptors.request.eject(myInterceptor);

- 为axios实例添加拦截器

    constinstance=axios.create();
    instance.interceptors.request.use(config=> {});

## 1.5 取消请求

用于取消正在进行的http请求。

    <body><divid="app"><button@click="getData">发送get请求</button><button@click="cancelReq">取消get请求</button></div><scriptsrc="https://unpkg.com/axios/dist/axios.min.js"></script><scriptsrc="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script><script>constCancelToken=axios.CancelToken;
    constsource=CancelToken.source();
    axios.defaults.baseURL='https://developer.duyiedu.com/vue';
    constvm=newVue({
    el: '#app',
    data: {
                },
    methods: {
    getData() {
    axios({
    method: 'get',
    cancelToken: source.token,
    url: '/getUserInfo'                    }).then( data=> {
    console.log(data)
                        }).catch( err=> {
    console.log(err);
                        })
                    },
    cancelReq() {
    console.log('点击了取消请求。')
    // 取消请求 参数 可选source.cancel('取消请求');
                    }
                }
            })
    </script></body>

![image.png](../.gitbook/assets/1603811535172-25a1330f-b5ba-44bb-a379-a4c8345453c3.png)

## 1.6 错误处理

在请求错误时进行的处理 request / response 是error的上下文，标志着请求发送 / 得到响应 在错误中。

> 如果响应有值，则说明是响应时出现了错误。

> 如果响应没值，则说明是请求时出现了错误。

> 在错误中，如果请求无值，则说明是请求未发送出去，如取消请求。

    axios.get('/user/12345')
      .catch(function (error) {
    // 错误可能是请求错误，也可能是响应错误if (error.response) {
    // 响应错误    } elseif (error.request) {
    // 请求错误    } else {
    // 请求未发出console.log('Error', error.message);
        }
    console.log(error.config);
      });

在实际开发过程中，一般在拦截器中统一添加错误处理 请求拦截器中的错误，会当请求未成功发出时执行，但是要注意的是：取消请求后，请求拦截器的错误函数也不会执行，因为取消请求不会抛出异常，axios对其进行了单独的处理。 在更多的情况下，我们会在响应拦截器中处理错误。

    constinstance=axios.create({});
    instance.interceptors.request(config=> {
    }, error=> {
    returnPromise.reject(error);
    })
    instance.interceptors.response(response=> {
    }, error=> {
    returnPromise.reject(error);
    })

## 1.7 axios 预检

当axios的请求为非简单请求时，浏览器会进行预检，及发送OPTIONS请求。请求到服务器，询问是否允许跨域。如果响应中允许预检中请求的跨域行为，则浏览器会进行真正的请求。否则会报405错误。