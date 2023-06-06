import React from "react";
import Test from "../Data/Test";

function Testimonials() {
  return (
    <section>
      <div className="sm:flex justify-around relative mt-20">
        <div className="mt-24">
          <p className="text-sm uppercase text-[#5E6282] font-Poppins">
            Testimonials
          </p>
          <h1 className="text-4xl text-[#14183E] f0nt-bold font-Volkhov">
            What People say
            <br /> About Us
          </h1>
        </div>
        <div>
          {Test.Data.map((items, id) => (
            <div
              key={id}
              className="bg-white z-10 absolute top-16 right-20 shadow-2xl backdrop-blur-md drop-shadow-xl mt-10 sm:w-[430px] sm:h-[272px] flex rounded-2xl"
            >
              <div className="p-5 text-base font-Poppins">
                <img src={items.imgUrl} alt="" className="" />
                <p className="pt-4 leading-7 flex-wrap">{items.content}</p>{" "}
                <p className="pt-5 text-[#5E6282] text-lg font-semibold font-Poppins">
                  {items.name}
                </p>
                <p className="text-[#5E6282] text-sm font-normal font-Poppins">
                  {items.country}
                </p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>

      <article>
        <div></div>
      </article>
    </section>
  );
}

export default Testimonials;
