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
render
文本或数字节点
    span包裹
html普通节点
	正常渲染，对子组件递归渲染，同时绑定事件
类组件
	执行 new Component(props) 在获取render函数的返回值
	递归解析返回值，返回值类型：1、文本或数字节点 2、 html普通节点 3、类组件
	最后转化成普通html文本
```

> `createElement` 创建虚拟dom 即使用对象来描述dom节点

```javascript
<div name="father">hello<span>children</span></div>
    -----------------------babel转义之后-----------------------------
React.createElement("div", {
  name: "father"
}, "hello", React.createElement("span", null, "children"));
```

