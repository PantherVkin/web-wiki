# Action

描述要做的事情。

action是一个plain-object（**平面对象**） 。

- 它的**proto**指向`Object.prototype`

- 通常，使用`payload`属性表示附加数据（没有强制要求）

- action中必须有`type`属性，该属性用于描述操作的类型，但是，没有对type的类型做出要求



## action-type

在大型项目，由于操作类型非常多，为了避免硬编码（hard code），会将action的类型存放到一个或一些单独的文件中(样板代码)。

- `action-type.js`

```jsx
export const INCREASE = Symbol("increase");
export const DECREASE = Symbol("decrease");
export const SET = Symbol("set");
```



## action creator

为了方面传递action，通常会使用action创建函数(action creator)来创建action。

action创建函数应为无副作用的纯函数。

- `number-action.js`

```jsx
import * as actionTypes from "./action-type"
/**
 * 得到一个用于增加数字操作的action
 */
export function getIncreaseAction() {
    return {
        type: actionTypes.INCREASE
    };
}

export function getDecreaseAction() {
    return {
        type: actionTypes.DECREASE
    }
}

export function getSetAction(newNumber) {
    return {
        type: actionTypes.SET,
        payload: newNumber
    }
}
```



## bindActionCreators

为了方便利用action创建函数来分发（触发）action，redux提供了一个函数`bindActionCreators`，该函数用于增强action创建函数的功能，使它不仅可以创建action，并且创建后会自动完成分发。

```jsx
import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/action-type"
import * as numberActions from "./action/number-action"


//假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
//约定action的格式：{type:"操作类型", payload:附加数据}

/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === actionTypes.INCREASE) {
        return state + 1;
    }
    else if (action.type === actionTypes.DECREASE) {
        return state - 1;
    }
    else if (action.type === actionTypes.SET) {
        return action.payload;
    }
    return state;//如果是一个无效的操作类型，数据不变
}

const store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(numberActions, store.dispatch);

console.log(store.getState()); //得到仓库中当前的数据

//得到一个increase action，并直接分发
boundActions.getIncreaseAction(); //向仓库分发action

console.log(store.getState()); //得到仓库中当前的数据

boundActions.getSetAction(3);

console.log(store.getState()); //得到仓库中当前的数据
```