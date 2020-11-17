import React from './react'
function say() {
    alert('hello')
}

class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            number:123
        }
    }

    componentWillMount() {
        console.log('child 组件将要挂载');
    }

    componentDidMount() {
        console.log('child 组件将要挂载');
    }

    render() {
        return this.state.number
    }
}
class MyComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    componentWillMount() {
        console.log('parent 组件将要挂载');
    }

    componentDidMount() {
        console.log('parent 组件将要挂载');
    }

    render() {
        return <Child />
    }
}

let element = React.createElement(
    "div", { name: "father" }, "hello",
    React.createElement("span", null, "children1"),
    React.createElement("button", { onClick: say }, "123")
);


// React.render('hello react', document.getElementById('root'))
// React.render(element, document.getElementById('root'))
React.render(React.createElement(MyComponent, {
    name: "component"
}), document.getElementById('root'))