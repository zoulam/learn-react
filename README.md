# 手写react

## 1、环境

1. 使用 `cra`提供babel和webpack环境

    删除无用的 `public` 和 `src`下的文件，留下html模板 `index.html` 和 入口文件 `index.js`即可

1. 使用jquery操作dom

## 2、render函数

>  接收两个参数 
>
> ​	1、 文本（含数字）节点、类组件，函数组件，jsx等
>
> ​	2、参数1插入html的父元素

```
参数1的功能拆分
	1、
```

> `createElement` 创建虚拟dom 即使用对象来描述dom节点

```javascript

<div name="father">hello<span>children</span></div>
    -----------------------babel转义之后-----------------------------
React.createElement("div", {
  name: "father"
}, "hello", React.createElement("span", null, "children"));
```

