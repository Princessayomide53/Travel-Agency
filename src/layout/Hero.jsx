import React from "react";
import Nav from "./Nav";
import decore from "../../src/assets/decore.png";
import image from "../../src/assets/image.png";
// import { Cross as Hamburger } from 'hamburger-react'

function Hero() {
  return (
    <>
      <section>
        <Nav />
        <div className="flex flex-end justify-end body ">
          <img
            src={decore}
            alt=""
            className="sm:-mt-20 sm:w-[500px] sm: w-[220px] h-[550px] -mt-[57px]"
          />
        </div>
        <div className="z-50 sm:mt-10 sm:pl-10 flex sm:flex-row flex-col sm:justify-between">
          <div className="sm:mt-10 pt-0 sm:pl-10 md:pl-5 pl-10 lg:pl-12">
          <p className="text-[#DF6951] -mt-[440px]  font-Poppins font-bold sm:pl-0 md:text-xl text-sm lg:text-2xl">
            Best Destinations Around the world
          </p>
          <h1 className="font-bold lg:text-6xl md:text-5xl sm:pt-3 pt-4 font-Volkhov sm:pl-0 text-[37px]">
            Travel, enjoy
            <br /> and live a new <br /> and full life
          </h1>
          </div>
          <div className="z-20 pr-20 lg:pr-[145px]">
          <img src={image} alt="" className="sm:w-[400px] sm:h-[400px] sm:-mt-[450px] md:w-[300px] md:h-[300px] -mt-[190px]"/>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Hero;
