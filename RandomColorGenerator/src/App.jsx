import { useState , useEffect } from 'react'
import './style.css'
import './App.css'

function App() {
   const [typeOfColor, setTypeOfColor] = useState('HEX')
   const [color, setColor] = useState('#000000') 

   const randomColorUtility = (length) => (
  Math.floor(Math.random() * length)
   )

 const handleRandomHexColor = () => {
  const hex =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let hexColor = '#'
  for (let i =0; i < 6; i++) {
    hexColor += hex[randomColorUtility(hex.length)]
    console.log(hexColor);
    
   }
   setColor(hexColor)
 } 
  
 const  handleRandomRgbColor = () => {
  const r = randomColorUtility(256);
  const g = randomColorUtility(256);
  const b = randomColorUtility(256);

  setColor(`rgb(${r},${g},${b})`)
 } 
 useEffect(() => {
  (typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor)
 }, [typeOfColor])
 
     
  return (
    <div style={{
      width:"100vw",
      height: "100vh",
      background: color ,
      }}>
        <div className='btn-container'>
        <button onClick={()=> setTypeOfColor('hex')}>Create random HEX Color </button>
      <button onClick={()=>setTypeOfColor("rgb")}>Create random RGB Color </button>
      </div>
      <button onClick={typeOfColor === "hex" ? handleRandomHexColor:handleRandomRgbColor}>Create random Color </button>
    
      <div  className='color-container'>
        <h2>{typeOfColor === "rgb"  ? " RGB Color":"HEX Color"}
        </h2>
        <h3>{color}</h3>
        </div>
      
    </div>
   )
}

export default App
