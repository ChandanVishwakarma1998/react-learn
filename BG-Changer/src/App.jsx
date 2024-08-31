import React, {useState} from 'react'
import './theme.css'
import useLocalStorage from './useLocalStorage';


function App() {
  const [theme, setTheme] = useLocalStorage("theme","dark")
   function handleToggleButton() {
    setTheme(theme === "light" ? "dark" : "light"
    )
   }
console.log(theme);

  return (
    <div className='dark-light-mode' data-theme={theme}>
      <div className="container">
        <button onClick={handleToggleButton}
        > Change Theme</button>
        </div>
        </div>
  )
}

export default App