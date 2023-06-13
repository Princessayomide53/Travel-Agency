import React, {useState} from 'react'
import tour from "../video/tour.mp4";

function Videoplayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
      setIsPlaying(!isPlaying)
    }
  return (
    <div><video  src={tour}
    controls={isPlaying}
    onClick={handleClick}/></div>
  )
}

export default Videoplayer