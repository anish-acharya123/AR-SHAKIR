import React from "react";
import quote from "../assets/offers/quote-icon.png";
import testimonial from "../assets/testimonials/testimonial1.png";
import fill from "../assets/testimonials/fill.png";

function Testimonials() {
  return (
    <section className="flex justify-center items-center py-32 ">
      <div className="flex px-6 flex-col gap-20 items-start justify-center w-full max-w-[1440px] relative ">
        <div className="flex flex-col gap-4  ">
          <h1 className=" font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-left leading-[130%]">
            Testimonials
          </h1>
          <p className="md:w-[30rem] ">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          <figure className="hidden lg:block absolute right-44 top-10 ">
            <img src={fill} alt="fill" className="w-[15rem]" />
          </figure>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-4  ">
          <div className="flex  sm:flex-row flex-col sm:justify-evenly justify-center items-center gap-4 bg-[#F2F2F2] p-10  mt-4    relative flex-1 ">
            <figure className="absolute top-0 -translate-y-5 left-10">
              <img src={quote} alt="" />
            </figure>
            <div className="grid gap-10 sm:w-[50%] place-content-center">
              <p>
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <h2 className="font-bold">- Mike Taylor, Web Designer</h2>
            </div>
            <figure>
              <img src={testimonial} alt="" className="h-[20rem] " />
            </figure>
          </div>
          <div className="flex sm:flex-row flex-col  sm:justify-evenly justify-center items-center gap-4  bg-[#F2F2F2]  p-10  mt-4   relative flex-1 ">
            <figure className="absolute top-0 -translate-y-5 left-10">
              <img src={quote} alt="" />
            </figure>
            <div className="grid gap-10 sm:w-[50%] place-content-center">
              <p>
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <h2 className="font-bold">- Mike Taylor, Web Designer</h2>
            </div>
            <figure>
              <img src={testimonial} alt="" className="h-[20rem] " />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
