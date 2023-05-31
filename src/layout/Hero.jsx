import React from "react";
import Nav from "./Nav";
import decore from "../../src/assets/decore.png";
import { Cross as Hamburger } from 'hamburger-react'

function Hero() {
  return (
    <>
      <section>
        <Nav />
        <div className="flex flex-end justify-end body z-10">
          <img src={decore} alt="" className="sm:-mt-12 sm:w-[500px] sm:h-screen w-[220px] h-[550px] -mt-[57px]" />
        </div>
      </section>
    </>
  );
}

export default Hero;
