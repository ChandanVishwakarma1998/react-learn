import React ,{useState , useContext }from 'react'
import {UserContext} from '../UserContext/UserContext.jsx'

export default function Login() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const handleSubmit= (e)=> {
    e.preventDefault()
    setUser({name , password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      value={name} 
      onChange={(e)=> setName(e.target.value) }
      placeholder='UserName'
      />
       <input type="text"
      value={password} 
      onChange={(e)=> setPassword(e.target.value) }
      placeholder='password'
      />
      <button onClick={handleSubmit}>Submit</button>
      
      </div>
  )
}

