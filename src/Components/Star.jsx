import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({noOfStars = 5}) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (gettingIndex) =>{
    setRating(gettingIndex)

  }

  const handleMouseEnter = (gettingIndex) =>{
    setHover(gettingIndex)
  }
  
  const handleMouseLeave = () =>{
    setHover(rating)

  }

  return (
    <div className='flex gap-5 mx-auto star-rating'>
     {
      [...Array(noOfStars)].map((_, index)=>{
        index += 1
        return <FaStar 
        className={index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}
        key={index}
        onClick={()=>handleClick(index)}
        onMouseMove={()=>handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave()}
        size={50}
        // color={index <= (hover || rating) ? "gold" : "gray"}
        />
      })
     }
    </div>
  )
}

export default Star
