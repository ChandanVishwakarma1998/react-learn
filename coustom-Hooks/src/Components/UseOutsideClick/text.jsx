import React from 'react'

function text() {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      {show ? <div>
        <h1>UseOutSideClick</h1>
      <p> This mean outside button is not clicked</p>
      </div>: 
      <button onClick={()=>{handleEvent}}>Click to show</button>
}
    </div>
  )
}

export default text