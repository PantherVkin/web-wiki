# button组件 
# 需求分析

- 类型

为Link 类型时，是 a 标签。

- 尺寸

- 状态

- 需支持button 原生的属性

![](../.gitbook/assets/1658490334656-6883bda8-7743-477c-9b01-63298be07863.png)

# 使用

![](../.gitbook/assets/1658490499457-1c23eec9-0ebb-4968-b0f2-6bc393b375f7.png)

# 扩展

## classnames 

[https://github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)

    npm install classnames --save
    npm install @types/classnames --save

![](../.gitbook/assets/1658492064953-f70ff068-454e-4eb7-997f-7357ccb40f01.png)

## pointer-events

![](../.gitbook/assets/1658496001585-8ae1d42d-3c53-4d94-8c56-1c29595b822a.png)

不接受鼠标事件。

## 添加 button、a 原生属性

- TS 叠加类型  **&**

**Partial**  把属性全部变成可选。

    type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
    type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
    export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>