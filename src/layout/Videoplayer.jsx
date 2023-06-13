import React, {useState} from 'react'
import tour from "../video/tour.mp4";
import {BiPlay} from "react-icons/bi";


function Videoplayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
      setIsPlaying(!isPlaying)
    }
  return (
    <div>
        {isPlaying ? (<video  src={tour}
    controls autoPlay/>) : ( <button className="px-5 rounded-full py-5 bg-[#DF6951]" onClick={handleClick}><BiPlay className="text-white sm:text-xl"/> </button> )}
  </div>
  )
}

export default Videoplayer