import { useState } from 'react'


import QRCode from 'react-qr-code'

function App() {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState('')

  const handleGenerateQrCode = () => (
    setQrCode(input)
  )

  return (
    <div className=' flex flex-col justify-center items-center w-full h-screen bg-gray-500 '>
      <h1 className='font-bold text-2xl'>Generate QR Code</h1>
  <input 
  onChange={(e) => setInput(e.target.value)}
  type="text" 
  name="qr-code" 
  placeholder=' Genereate QR Code '
  className=' py-1 px-3 rounded-md outline-none ' />
  <button disabled={input && input.trim() !=="" ? false : true} className='font-bold text-xl'  onClick={handleGenerateQrCode }>Generate</button>
  <QRCode className=" text-red-400"
  
  size={300}
  value={qrCode}/>

    </div>
  )
}

export default App
