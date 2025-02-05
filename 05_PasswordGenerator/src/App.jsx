import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [length,setlength] = useState(10)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str += "0123456789"
    if (charAllow) str += "!@$%^&+#~`'()_-+={[}]|<>?/"

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random()*str.length);

      pass += str[index];
    }

    setPassword(pass);

  }, [length,numAllow,charAllow,setPassword])

  
  // effect hook to change values when dependy changes
  useEffect(() => {passwordGenerator()},[length,numAllow,charAllow,passwordGenerator])
  
  // ref hook to connect different elements
  const passwordRef = useRef(null)
  const copyPasswordToCliprboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className='w-full h-svh py-8'
      style={{backgroundColor: "black"}}>
        <div className='w-full max-w-lg mx-auto px-4 py-3 shadow-lg  rounded-xl bg-gray-600 text-brown-200'>
          <div className='text-4xl text-center text-white'>Password Generator</div>
          <div className='flex shadow-lg rounded-md overflow-hidden my-4'>
            <input 
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-2 px-3 rounded-l-lg'
            readOnly 
            ref={passwordRef}

            />
            <button
            onClick={copyPasswordToCliprboard}
            className='outline-none bg-blue-400 text-white px-2 py-1 shrink-0 rounded-r-lg'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 mx-auto'>
              <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer ' 
              onChange={(e) => setlength(e.target.value)
              }
              />
              <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input 
              type="checkbox"
              defaultChecked={numAllow}
              id='NumberInput'
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}/>
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input 
              type="checkbox"
              defaultChecked={charAllow}
              id='CharInput'
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}/>
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
