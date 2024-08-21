import React from "react";
import element1 from "../assets/getstarted/element1.png";
import element2 from "../assets/getstarted/element2.png";
import element3 from "../assets/getstarted/element3.png";
import element4 from "../assets/getstarted/element4.png";

function Getstarted() {
  return (
    <section className="flex items-center justify-center   py-36">
      <div className="px-6 max-w-[1440px] w-full bg-[#3634a8] py-40 md:rounded-2xl flex items-center justify-center flex-col gap-8 relative">
        <h1 className="md:text-[32px] text-[18px]  font-bold text-center text-white">
          Discover a better way to <br /> manage spendings
        </h1>
        <div>
          <button className="border-none p-4 rounded bg-[#F37702] text-white">
            Get Started Now
          </button>
        </div>

        <figure className="absolute md:-translate-x-32 -translate-y-16 -translate-x-20 p-4 ">
          <img src={element1} alt="" />
        </figure>
        <figure className="absolute  -translate-x-52 translate-y-16 hidden md:block ">
          <img src={element2} alt="" />
        </figure>
        <figure className="absolute left-32 translate-y-20 hidden md:block">
          <img src={element3} alt="" />
        </figure>
        <figure className="absolute right-32 translate-y-20 hidden md:block">
          <img src={element4} alt="" />
        </figure>
        <figure className="absolute right-32 -translate-y-20 rotate-90 hidden md:block">
          <img src={element3} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Getstarted;
