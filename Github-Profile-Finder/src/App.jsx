import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'


function App() {
 const [userName, setUserName] = useState("hiteshchoudhary")
 const [userData, setUserData] = useState(null)
 const [loading, setLoading] = useState(true)
    
     const fetchGithubUserData = async() => {
       setLoading(true)
       const res = await fetch(`https://api.github.com/users/${userName}`) 
       const data = await res.json()
       console.log(data);
       

        if(data) {
          setUserData(data)
          setLoading(false)
          setUserName("")
        }

     }
   
   useEffect(() => {
    fetchGithubUserData()
   } 
   ,[])
 const handleSubmit = () => {
  fetchGithubUserData()
 }

 if(loading){
  return <h2 className='w-full h-screen text-center font-bold text-red-200'>Loading data ! Please wait</h2>
 }

  return (
<div className=" flex flex-col justify-center w-full max-w-full my-0 mx-auto p-5 rounded-lg ">
<div  className='flex justify-center items-center '>
   <input 
   className='bg-slate-200 p-1 rounded-l-lg font-semibold outline-none'
   type="text"  
   name="searchByUsername" 
   onChange={(e) => setUserName(e.target.value)}
   value={userName} />
   <button 
   className='bg-blue-300 hover:bg-blue-500 font-bold px-2 py-1 rounded-r-lg'
   onClick={handleSubmit}>Search</button>
</div>
<div className=" ">
  {
    userData !== null ? <User user={userData} /> : null
  }
</div>
</div>

  )
}

export default App
