import React from 'react'
import{useLoaderData} from 'react-router-dom'

function Github() {
  const data=useLoaderData()

  return (
    <div className=' flex flex-col justify-center items-center  text-center m-4 bg-amber-300 text-black font-medium p-4 text-2xl'>
      Github Followers : {data.followers}
      <img className='rounded-lg  border-solid border-3 border-black' src={data.avatar_url} alt="git img" width={300} />
  
    </div>
  )
}

export default Github
 
export const githubInfoLoader= async() => {
    const response = await fetch("https://api.github.com/users/ChandanVishwakarma1998")
     return response.json() 
     console.log(response.json);
     
    }