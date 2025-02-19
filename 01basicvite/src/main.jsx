
import { createRoot } from 'react-dom/client'
 import React from 'react'
 import Youtube from './Youtube'
// import App from './App.jsx'
import App from './App.jsx'

const reactElement = {
  type: 'a',  // Changed to 'a' since it has href
  props: {
      href: 'https://www.youtube.com',
      target: '_blank',
  },
  children: 'Click me to Visit Google'  // Fixed 'chidren' typo
}


// whatever we write in the { brackets react just extract it in the fromat of object and it is the format of the given below if there is an element in the  braces it is added at the end of the object it only takes evaluated statements}
const areactElement = React.createElement(
  // the first thing react reads is element type
  'a',
  // the second thing react reads is props
  {
    href: 'https://www.youtube.com',
    target: '_blank'
  },
  'click to visit youtube'
)

createRoot(document.getElementById('root')).render(
   <App />,
    <Youtube />
  ,
)
