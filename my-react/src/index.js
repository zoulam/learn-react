import React from './react'
function say() {
    alert('hello')
}


let element = React.createElement(
    "div", { name: "father" }, "hello",
    React.createElement("span", null, "children1"),
    React.createElement("button", { onClick: say }, "123")
);


// React.render('hello react', document.getElementById('root'))
React.render(element, document.getElementById('root'))