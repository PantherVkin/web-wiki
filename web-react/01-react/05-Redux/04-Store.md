# Store

Store：用于保存数据。

通过`createStore`方法创建的对象。

该对象的成员：

- `dispatch`：分发一个action
- `getState`：得到仓库中当前的状态
- `replaceReducer`：替换掉当前的reducer
- `subscribe`：注册一个监听器，监听器是一个无参函数，该分发一个action之后，会运行注册的监听器。该函数会返回一个函数，用于取消监听。

```js
import { createStore } from "redux";
import reducer from "./reducer"
import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"


const store = createStore(reducer);

console.log(store)

const unListen = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(createAddUserAction({
    id: 3,
    name: "abc",
    age: 10
}));

unListen(); //取消监听

store.dispatch(createDeleteUserAction(3));
```

