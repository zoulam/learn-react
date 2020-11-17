/**
 * @description 对传入的节点进行封装，添加id
 */

import $ from 'jquery'
class Unit {
    constructor(element) {
        this.currentElement = element
    }
}


class ReactTextUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId
        return `<span data-reactid="${rootId}">${this.currentElement}</span>`
    }
}

class ReactNativeUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId
        let { type, props } = this.currentElement
        let tagStart = `<${type} data-reactid="${rootId}"`
        let tagEnd = `</${type}>`
        let subElmentStr
        for (let propName in props) {
            // 事件
            if (/on[A-Z]/.test(propName)) {
                let eventType = propName.slice(2).toLowerCase()
                $(document).on(eventType, `[data-reactid="${rootId}"]`, props[propName])
            } else if (propName === 'children') { // 子节点
                subElmentStr = props[propName].map((child, index) => {
                    let createReactUnitInstance = createReactUnit(child)
                    return createReactUnitInstance.getMarkUp(`${rootId}.${index}`)
                }).join('')
            } else { // 普通props
                tagStart += `${propName}=${props[propName]}`
            }
        }
        return tagStart + '>' + subElmentStr + tagEnd
    }
}

class ReactCompositUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId
        const { type: Component, props } = this.currentElement
        const componentInstance = new Component(props)
        const reactComponentRenderer = componentInstance.render()
        // 递归render 1、文本节点 2、普通节点 3、其他组件
        const reactComponentUnitInstance = createReactUnit(reactComponentRenderer)
        let markup = reactComponentUnitInstance.getMarkUp(rootId)
        return markup
    }
}

function createReactUnit(element) {
    // 文本节点
    if (typeof element === 'string' || typeof element == 'number') {
        return new ReactTextUnit(element)
    }

    // 普通节点
    if (typeof element == 'object' && typeof element.type == 'string') {
        return new ReactNativeUnit(element)
    }

    // react类节点
    if (typeof element == 'object' && typeof element.type == 'function') {
        return new ReactCompositUnit(element)
    }
}

export default createReactUnit