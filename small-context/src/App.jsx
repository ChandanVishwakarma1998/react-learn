import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import {UserContextProvider} from './UserContext/UserContext'



function App() {
  const [count, setCount] = useState(0)

  return (
<UserContextProvider>
     <h1>React with Chai and share is important</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
