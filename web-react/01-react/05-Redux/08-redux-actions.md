# redux-actions

> 该库用于简化 `action-types` 、`action-creator`以及`reducer`
> 官网文档：https://redux-actions.js.org/



## createAction(s)

### createAction

该函数用于帮助你创建一个action创建函数（action creator）

[react-learn/src/store/action/counter/index copy.js · DEV-Edu/frontend-react - Gitee.com](https://gitee.com/dev-edu/frontend-react/blob/8-14.reduc-actions/react-learn/src/store/action/counter/index copy.js)



### createActions

该函数用于帮助你创建多个action创建函数

[react-learn/src/store/action/counter/index copy 2.js · DEV-Edu/frontend-react - Gitee.com](https://gitee.com/dev-edu/frontend-react/blob/8-14.reduc-actions/react-learn/src/store/action/counter/index copy 2.js)



## handleAction(s)

### handleAction

简化针对单个action类型的reducer处理，当它匹配到对应的action类型后，会执行对应的函数

[react-learn/src/store/reducer-失效/counter/index copy.js · DEV-Edu/frontend-react - Gitee.com](https://gitee.com/dev-edu/frontend-react/blob/8-14.reduc-actions/react-learn/src/store/reducer-失效/counter/index copy.js)



### handleActions

简化针对多个action类型的reducre处理。

[react-learn/src/store/reducer-失效/counter/index copy 2.js · DEV-Edu/frontend-react - Gitee.com](https://gitee.com/dev-edu/frontend-react/blob/8-14.reduc-actions/react-learn/src/store/reducer-失效/counter/index copy 2.js#)



## combineActions

配合`createActions`和`handleActions`两个函数，用于处理`多个action-type`对应`同一个reducer`处理函数。

[react-learn/src/store/action/counter/index.js · DEV-Edu/frontend-react - 码云 - 开源中国 (gitee.com)](https://gitee.com/dev-edu/frontend-react/blob/8-14.reduc-actions/react-learn/src/store/action/counter/index.js)



