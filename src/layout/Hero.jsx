import React, { useState } from "react";
import Nav from "./Nav";
import decore from "../../src/assets/decore.png";
import Image from "../../src/assets/Image.png";
import '../../src/App.css';
// import Animista, { AnimistaTypes } from "react-animista";
import {BiPlay} from "react-icons/bi";
import tour from "../video/tour.mp4";


function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }


  return (
    <>
      <section>
        <Nav />
        <div className="flex flex-end justify-end body ">
          <img
            src={decore}
            alt=""
            className="sm:-mt-20 sm:w-[500px] sm: w-[220px] h-[350px] sm:h-[550px] -mt-[57px]"
          />
        </div>
        <div className="z-50 sm:mt-10 lg:pl-[15px] md:pl-[27px] flex sm:flex-row flex-col md:justify-between lg:">
        {/* <Animista  duration="2s" delay="1s"> */}
          <div className="sm:mt-10 pt-[190px] md:pt-0 sm:pl-10 md:pl-5 pl-10 lg:pl-12 xl:pl-16">
            <p className="text-[#DF6951] -mt-[440px]  font-Poppins font-bold sm:pl-0 md:text-xl text-sm lg:text-3xl">
              Best Destinations Around the world
            </p>
            <h1 className="font-bold lg:text-7xl md:text-5xl sm:pt-3 pt-4 font-Volkhov sm:pl-0 text-[37px]">
              Travel, enjoy
              <br /> and live a new <br /> and full life
            </h1>
            <p className="lg:text-lg sm:pt-5 font-normal md:text-xs text-[10px] pt-2 break-all font-Poppins flex-wrap">
              Built Wicket longer admire do barton vanity itself do in it.
              <br /> Preferred to sportsmen it engrossed listening. Park gate
              <br /> sell they west hard for the.
            </p>
            <div className="space-x-20 flex"><button className="text-white  shadow-md drop-shadow-2xl shadow-[#f1A501] bg-[#F1A501] text-[10px] sm:text-base px-5 py-2 rounded-md mt-3 sm:mt-5">Find out more</button>

            {isPlaying ? (<div className="relative w-[600px] h-[180px] z-20 -mt-[500px]"> <video className="object-cover w-full h-screen" src={tour}
    controls autoPlay/></div>) : ( <div className="flex gap-4"><button className="px-3 mt-5 rounded-full h-10 bg-[#DF6951]" onClick={handleClick}>
      <BiPlay className="text-white sm:text-xl"/> </button> <p className="lg:mt-7 font-Poppins">Play Demo</p></div>)}
        </div>
          </div>


          <div className="pr-20 lg:pr-[120px]">
            <img
              src={Image}
              alt=""
              className="lg:w-[450px] xl:w-[600px] xl:h-[600px] lg:h-[450px] sm:-mt-[450px] md:w-[300px] md:h-[300px] -mt-[120px] w-[300px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
