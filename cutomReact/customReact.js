function customRender (reactElement, container){
    //    const domElement = document.createElement(reactElement.type)
    //    domElement.innerHTML = reactElement.children
    //    domElement.setAttribute('href', reactElement.props.href)
    //    domElement.setAttribute('target', reactElement.props.target)
    //    container.appendChild(domElement)

    // we can also do that 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;  // Fixed innerHtml

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    container.appendChild(domElement);  // Removed undefined variable issue
}

const reactElement = {
    type: 'a',  // Changed to 'a' since it has href
    props: {
        href: 'https://www.youtube.com',
        target: '_blank',
    },
    children: 'Click me to Visit Google'  // Fixed 'chidren' typo
}

//  document.getElementById('root').innerHTML = `<a href=${reactElement.props.href} target=${reactElement.props.target}>${reactElement.children}</a>`

const container = document.querySelector('#root');

// a method is used where we take two inputs like what we want to put and where we want to put
customRender(reactElement, container);
