import React from "react";
import Nav from "./Nav";
import decore from "../../src/assets/decore.png";
import Image from "../../src/assets/Image.png";
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
            className="sm:-mt-20 sm:w-[500px] sm: w-[220px] h-[350px] sm:h-[550px] -mt-[57px]"
          />
        </div>
        <div className="z-50 sm:mt-10 sm:pl-10 flex sm:flex-row flex-col sm:justify-between">
          <div className="sm:mt-10 pt-52 md:pt-0 sm:pl-10 md:pl-5 pl-10 lg:pl-12">
            <p className="text-[#DF6951] -mt-[440px]  font-Poppins font-bold sm:pl-0 md:text-xl text-sm lg:text-2xl">
              Best Destinations Around the world
            </p>
            <h1 className="font-bold lg:text-6xl md:text-5xl sm:pt-3 pt-4 font-Volkhov sm:pl-0 text-[37px]">
              Travel, enjoy
              <br /> and live a new <br /> and full life
            </h1>
            <p className="sm:text-sm sm:pt-5 font-normal">
              Built Wicket longer admire do barton vanity itself do in it.
              <br /> Preferred to sportsmen it engrossed listening. Park gate
              <br /> sell they west hard for the.
            </p>
          </div>
          <div className="z-20 pr-20 lg:pr-[120px]">
            <img
              src={Image}
              alt=""
              className="lg:w-[450px] lg:h-[450px] sm:-mt-[450px] md:w-[300px] md:h-[300px] -mt-[190px] w-[300px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
