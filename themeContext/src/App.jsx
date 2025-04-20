import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import { ThemeProvider } from './context/themeContext'
import { useEffect } from 'react'



function App() {
  const [themeMode,setThemeMode ] = useState("light")

  const lightMode =() => {
    setThemeMode("light")
  }
  
  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
     document.querySelector("html").classList.remove("light" , "dark")
     document.querySelector("html").classList.add(themeMode)
  } ,[themeMode])

  return (
     <ThemeProvider value={{themeMode , lightMode, darkMode}}>
    <div className=' w-full  flex min-h-screen  items-center bg-amber-400' >
    <div className='w-full'> 
        <div  className='w-full max-w-sm mx-auto flex justify-end mb-4'>
           < ThemeButton/>
        </div>
        <div className='w-full min-w-sm mx-auto  '>
            <Card  />
        </div> 
    </div>
    </div>
    </ThemeProvider>
  )
}

export default App
