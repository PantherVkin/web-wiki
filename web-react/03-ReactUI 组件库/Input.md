# Input 
![](../.gitbook/assets/1658755493228-ba3810fa-1741-41ff-b06a-1efed4d5b785.png)

## TS Omit 忽略属性

    export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
      /**是否禁用 Input */
      disabled?: boolean;
      /**设置 input 大小，支持 lg 或者是 sm */
      size?: InputSize;
      /**添加图标，在右侧悬浮添加一个图标，用于提示 */
      icon?: IconProp;
      /**添加前缀 用于配置一些固定组合 */
      prepend?: string | ReactElement;
      /**添加后缀 用于配置一些固定组合 */
      append?: string | ReactElement;
      onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
    }


# 判断Promise

![](../.gitbook/assets/1658758890906-40f4ce6d-f9db-4cf8-b825-13bc2f400ec9.png)