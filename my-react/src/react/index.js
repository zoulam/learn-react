import $ from 'jquery'
import createReactUnit from './unit.js'
import createElement from './element.js'
import Component from './component.js'
const React = {
    render,
    nextRootIndex: 0,
    createElement,
    Component
}

function render(element, container) {
    let createReactUnitInstance = createReactUnit(element)
    let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex)
    // let markUp = `<span data-reactid="${React.nextRootIndex}">${element}<span>`
    $(container).html(markUp)
    $(document).trigger('mounted') // 挂载完成
}



export default React
