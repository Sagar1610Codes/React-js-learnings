function customRender(component,maincontainer){
    // const domElement = document.createElement(component.type)
    // domElement.innerHTML = component.Children
    // domElement.setAttribute('href',component.props.href)
    // domElement.setAttribute('target',component.props.target)
    // maincontainer.appendChild(domElement)

    const domElement = document.createElement(component.type)
    domElement.innerHTML = component.Children
    for (const prop in component.props) {
        domElement.setAttribute(prop,component.props[prop])
        }
    maincontainer.appendChild(domElement)
}

const component = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click here to see me'
}

const root = document.querySelector('#root')

customRender(component,root)