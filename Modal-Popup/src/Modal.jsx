import React from 'react'

function Modal({id , header , body , footer , onClose}) {
  return (
    <div className='modal'>
        <div className="content">
          
<div className="header">
<span onClick={onClose}
className='close-modal-icon'>&times;</span>
   {header ? header :" Header"} 
    </div>
<div className="body">
    { body ? body :(<div>This is main modal body of the Component </div>)}
    </div>
<div className="footer">
   <h2> {footer ? footer :"Footer"} </h2>
</div>


        </div>
    </div>
  )
}

export default Modal