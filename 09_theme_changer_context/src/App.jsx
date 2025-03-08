import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'

function App() {
  const [Theme, setTheme] = useState("light")

  const lightTheme = () => {
    setTheme("light")
  }
  const darkTheme = () => {
    setTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(Theme)
  }, [Theme])
  

  return (
    <>
      <ThemeProvider value={{Theme,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
