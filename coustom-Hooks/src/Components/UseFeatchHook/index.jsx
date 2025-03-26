import React, {  useState,useEffect } from 'react'

export default function useFetch( url  ) {
    const [data, setData] = useState(null) ;
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
 
   
    async function fetchData (){
        setPending(true)
        try {
            const response = await fetch(url)
            if(!response.ok)throw new Error(response.statusText)

            const result = await response.json()
           
            setData(result)
            setError(null)
            setPending(false)
           
          
          } catch (error) {
            setError(error)
            setPending(false)
        }
    } 

    useEffect(() =>{
  fetchData(url)
     } ,[url])

     console.log(data);
     

  return(
   { data , error, pending} )
}

