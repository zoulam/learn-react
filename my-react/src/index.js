import React from './react'
function say() {
    alert('hello')
}

class MyComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 1
        }
    }

    render() {
        return this.state.number
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