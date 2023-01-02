# Reducer

Reducer是用于改变数据的函数。

## reducer内部写法

1. 一个数据仓库，有且仅有一个reducer，并且通常情况下，一个工程只有一个仓库，因此，一个系统，只有一个reducer。

2. 为了方便管理，通常会将reducer放到单独的文件中。

3. reducer被调用的时机 
   - 通过**store.dispatch**，分发了一个action，此时，会调用reducer
   - 当`创建一个store`的时候，会调用一次reducer 
     - 可以利用这一点，用reducer初始化状态
     - 创建仓库时，不传递任何默认状态
     - 将reducer的参数state设置一个默认值

4. reducer内部通常使用switch来判断type值

```jsx
import * as usersAction from "../action/usersAction"
import uuid from "uuid"

const initialState = [
    { id: uuid(), name: "用户1", age: 11 },
    { id: uuid(), name: "用户2", age: 12 }
];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case usersAction.ADDUSER:
            return [...state, payload];
        case usersAction.DELETEUSER:
            return state.filter(it => it.id !== payload);
        case usersAction.UPDATEUSER:
            return state.map(it => it.id === payload.id ? {...it, ...payload} : it);
        default:
            return state
    }
}
```



5. **reducer必须是一个没有副作用的纯函数** 

   - 为什么需要纯函数 ？

   > 纯函数有利于测试和调式；
   >
   > 有利于还原数据；
   >
   > 有利于将来和react结合时的优化；

   - 具体要求 

     >  不能改变参数，因此若要让状态变化，必须得到一个`新的状态`；
     >
     > 不能有异步；
     >
     > 不能对外部环境造成影响；



## combineReducers

由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此，需要对reducer进行细分。 

redux提供了方法，可以帮助我们更加方便的合并reducer。

`combineReducers`: 合并reducer，得到一个新的reducer，该新的reducer管理一个对象，该对象中的每一个属性交给对应的reducer管理。

```js
import loginUserReducer from "./loginUser"
import usersReducer from './users'
import { combineReducers } from "redux"

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action)
//     };
//     return newState;
// }

export default combineReducers({
    loginUser: loginUserReducer,
    users: usersReducer
})
```



[react-learn/src/redux/index.js · DEV-Edu/frontend-react - 码云 - 开源中国 (gitee.com)](https://gitee.com/dev-edu/frontend-react/blob/7-4.reducer/react-learn/src/redux/index.js)