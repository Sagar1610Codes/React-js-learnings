import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  // let counter = 1

  const AddValue = () => {
    counter = counter+1
    setcounter(counter)
    console.log("Clicked Increase",counter)
  }

  const DecValue = () => {
    if (counter == 0){
      console.log("Can't decrease less than Zero!")
      return;
    }
    counter = counter - 1 
    setcounter(counter)
    console.log("Clicked Decrease",counter)
  }

  return (
    <>
      <h1>Basic Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={AddValue}>Increase</button>
      <br />
      <button onClick={DecValue}>Decrease</button>
    </>
  )
}

export default App
