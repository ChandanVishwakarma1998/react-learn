import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'
import './App.css'


function App( {noOfStar=9}) {
const [rating, setRating] = useState(0)
const [hover, setHover] = useState(0)

const handleClick =(currentIndex) => setRating(currentIndex)

const handleMouseEnter =(currentIndex) => setHover(currentIndex)

const handleMouseLeave =(currentIndex) => setHover(rating)

return(
<div className="star-rating">
  {
    [...Array(noOfStar)].map((_, index) => {
      index +=1
      return(
        <FaStar
        key={index}
        className={index <=(hover||rating) ? "active" : " inActive"}
        onClick={() => handleClick(index)}
        onMouseEnter={()=> handleMouseEnter(index)}
        onMouseLeave={ () => handleMouseLeave()}
        size={50}
        />

    )
    })
  }

</div>
)

}
 export default App