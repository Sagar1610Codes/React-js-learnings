import { useState } from "react"

function App() {
  const [color,setcolor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button 
            onClick={() => setcolor("red")}
            className="outline-none px-4 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={() => setcolor("Green")}
            className="outline-none px-4 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"Green"}}>Green</button>
            <button 
            onClick={() => setcolor("Blue")}
            className="outline-none px-4 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"Blue"}}>Blue</button>
            <button 
            onClick={() => setcolor("Olive")}
            className="outline-none px-4 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"Olive"}}>Olive</button>
            <button 
            onClick={() => setcolor("turquoise")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"turquoise"}}>turquoise</button>
            <button 
            onClick={() => setcolor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"grey"}}>grey</button>
            <button 
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"yellow"}}>yellow</button>
            <button 
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"pink"}}>pink</button>
            <button 
            onClick={() => setcolor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"purple"}}>purple</button>
            <button 
            onClick={() => setcolor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"lavender"}}>lavender</button>
            <button 
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{backgroundColor:"black"}}>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
