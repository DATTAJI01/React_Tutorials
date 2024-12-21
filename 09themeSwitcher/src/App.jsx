
import './App.css'
import { ThemeProvider} from './contexts/theme'
import { useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/Themebtn'

function App() {
  //const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme 

  useEffect(() => {
    const root = document.querySelector('html').classList

    root.remove('dark', 'light')
    root.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          {/* theme btn */}
                          <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* card */}
              <Card />
                        
            </div>
          </div>
        </div>
    </ThemeProvider>

  )
}
import { useEffect } from 'react'

export default App
