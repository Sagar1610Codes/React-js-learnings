import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <MyApp />
// )


 
const htmlelement = (
  <a href="https://google.com" target='_blank'>Google from html anchor</a>
)

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target : '_blank'},
  'Google from ReactELement'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)