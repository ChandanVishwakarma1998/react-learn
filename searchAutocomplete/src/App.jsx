import React, { useState , useEffect } from 'react'
import './App.css'
import useDebounce from './components/useDebouncing'
import Suggestions from './components/Suggestions'



function App() {
   
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [serchParam, setSerchParam] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUser,setFilteredUser]  = useState([])

  

   
   
  

   
const fetchAllUsers = async() => {
    try {

         setLoading(true)
      const response = await fetch('https://dummyjson.com/users')
      const  data    = await response.json()
     ;
      
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName))
          setLoading(false)
        
        }
    } catch (error) {
       setLoading(false)
       console.log(error);
       setError(error)

    }
  }
  const handleChange = (e) =>  {
    const query = e.target.value.toLowerCase()
    setSerchParam(query)
  }
  const debouncingSearchParams = useDebounce(serchParam, 200)

 const  handleClick = (e) => {
   setShowDropdown(false)
   setSerchParam(e.target.innerText)
   setFilteredUser([])
 }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  console.log(users , filteredUser)

  useEffect(() => {
    if(debouncingSearchParams .length > 1){
      
      const filteredData = users && users.length ?
      users.filter((item) => item.toLowerCase().includes(debouncingSearchParams) )
      : [] ;
      setFilteredUser(filteredData)
      console.log(filteredUser)
      setShowDropdown(filteredData.length > 0)
    } else {
    setShowDropdown(false)
  }} ,[debouncingSearchParams , users])
  console.log(users , filteredUser)

 
  return (

    <div className="main-Container">{
      loading ? (<h1>Loading data please wait</h1>) :
      (<div className="input"><input 
      
      type="text"
      placeholder='Serch Users here'
      onChange={handleChange}
      value={serchParam} />
      </div>)}
      <div className="suggestion"></div>
      {showDropdown && <Suggestions
    
      handleClick={handleClick} data= {filteredUser} /> }
    </div>
  )
}

export default App