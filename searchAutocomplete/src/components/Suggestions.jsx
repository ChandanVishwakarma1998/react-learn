import React from 'react'

function Suggestions({handleClick , data}) {
  return (
   <ul>
    {data && data.length ? data.map((item , i) => (
        <li
        onClick={handleClick} key={i}>{item}</li> 
    )):null}
   </ul>
  )
}

export default Suggestions