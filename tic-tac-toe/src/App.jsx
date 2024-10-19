
import React ,{useState , useEffect} from 'react'
import "./App.css"
function Square({value , oC}) {
  return(
    <button onClick={oC} className='square'>{value}</button>
  )
}

function App() {

  const [square, setSquare] = useState(Array(9).fill(""))
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState("")
  console.log(square);
    
  const getWinner = (square) => {
     const winningPattern = [
      [0,1,2,],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [0,3,6],
      [1,4,7],
      [2,4,6],
      [2,5,8],
     ];

     for (let i = 0; i < winningPattern.length; i++) {
      const [a,b,c] = winningPattern[i] ;

      if (
        square[a] && square[a] === square[b]  && square[a] === square[c]
      ) {
        return square[b]
      }
      }
      return null ;
  }


  const handleClick = (getCurrentSquare) => {
    let cpySquare = [...square] ;
    if (cpySquare[getCurrentSquare]) return ;
    cpySquare[getCurrentSquare] = isXTurn ? "X" : "O" ;
    
    setIsXTurn(!isXTurn) ;
    setSquare(cpySquare)
  } 
   const handleRestart = () => {
     setIsXTurn(true)
     setSquare(Array(9).fill(""))
   }
  useEffect(() => {
     if (!getWinner(square) && square.every((item) => ( item !== "" ))) {
       setStatus (`THIS IS DRAW PLEASE REASTART THE GAME`)
     } else if (getWinner(square)) 
      { setStatus (`WINNER IS ${getWinner(square)} PLEASE RESTART THE GAME`) }
      else {
        setStatus(`next players turn`)
      } 
  
  }, [square , isXTurn])
  
  
  return (
    <div className='main-container'>
      <div className="row">
        <Square  value={square[0]} oC={() => handleClick(0)}/>
        <Square  value={square[1]} oC={() =>handleClick(1)}/>
        <Square value={square[2]} oC={() =>handleClick(2)} />

      </div>
      <div className="row">
        <Square value={square[3]} oC={() =>handleClick(3)} />
        <Square  value={square[4]} oC={() =>handleClick(4)}/>
        <Square  value={square[5]} oC={() =>handleClick(5)}/>
        

      </div>
      <div className="row">
        <Square  value={square[6]} oC={() =>handleClick(6)}/>
        <Square  value={square[7]} oC={() =>handleClick(7)}/>
        <Square  value={square[8]} oC={() =>handleClick(8)}/>

      </div>
      <h2>{status}</h2> <b/>
      <button onClick={handleRestart}>Restsrt</button>

    </div>
  )
}

export default App