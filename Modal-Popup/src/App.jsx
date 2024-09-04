import React , {useState} from 'react'
import Modal from './Modal'
import './App.css'


function ModalTest() {
 const [showModalPopup, setShowModalPopup] = useState(false)

 const handleTogglePopup = () => {
  setShowModalPopup(!showModalPopup)
 }
  const onClose = () =>{
    setShowModalPopup(false)
 }
 

  return (
    <div className='ModalPopup'>
      <button 
      onClick={handleTogglePopup}
     >
        Open Modal Popup
        </button>
        { showModalPopup && 
        <Modal
         header={<h4> I'm the header</h4>}
         body={<h4>Body hai bhai body hai</ h4>}
         footer={<h4>ye Footer hai </h4>}
         onClose={onClose}
         />}
      
    </div>
  )
}

export default ModalTest