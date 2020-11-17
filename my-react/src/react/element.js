
// 此处为什么需要element类而不是直接返回对象
// element instanceof Element 可以判断他是不是react节点
class Element {
    constructor(type, props) {
        this.type = type
        this.props = props
    }
}

export default function createElement(type, props, ...children) {
    props = props || {}
    props.children = children
    return new Element(type, props)
}

