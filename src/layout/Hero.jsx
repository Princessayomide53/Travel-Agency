import React from "react";
import Nav from "./Nav";
import decore from "../../src/assets/decore.png";
import { Cross as Hamburger } from 'hamburger-react'

function Hero() {
  return (
    <>
      <section>
        <Nav />
        <div className="flex flex-end justify-end body ">
          <img src={decore} alt="" className="sm:-mt-20 sm:w-[500px] sm:h-screen w-[220px] h-[550px] -mt-[57px]" />
        </div>
        <div className="z-50">
            <p className="text-[#DF6951] sm:-mt-[620px] -mt-[440px]  font-Poppins font-bold pl-10 text-lg sm:pl-10 sm:text-2xl">Best Destinations Around the world</p>
            <h1 className="font-bold sm:text-8xl sm:pl-10 sm:pt-3 font-Volkhov pt-3 pl-10 text-5xl">Travel, enjoy<br /> and live a new <br /> and full life</h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
