import React from "react";
import offer1 from "../assets/offers/offer1.png";
import offer2 from "../assets/offers/offer2.png";

function Features() {
  return (
    <section className="flex justify-center items-center py-32 bg-[#9fd4e9]">
      <div className="flex px-6 flex-col gap-20 items-start justify-center w-full max-w-[1440px] ">
        <div className="flex flex-col gap-4">
          <h1 className=" font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-left leading-[130%]">
            Features that blows mind
          </h1>
          <p className="md:w-[30rem] ">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-4 grid-rows-2 ">
          <div className="bg-white pl-6 pr-6 lg:pr-20 py-20 flex flex-col gap-6 rounded-md row-span-2">
            <figure>
              <img src={offer2} alt="" />
            </figure>
            <h3 className="text-[23px] font-bold">
              Really boy law county she unable her sister
            </h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="bg-white pl-6 pr-6  lg:pr-20 py-20 flex flex-col gap-6 rounded-md row-span-2">
            <figure>
              <img src={offer1} alt="" />
            </figure>
            <h3 className="text-[23px] font-bold">
              Among sex are leave law built now
            </h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="bg-white p-10 flex flex-col gap-6 rounded-md">
            <h3 className="text-[23px] font-bold">
              Merits behind on afraid or warmly
            </h3>
          </div>
          <div className="bg-white p-10 flex flex-col gap-6 rounded-md">
            <h3 className="text-[23px] font-bold">
              Believing neglected so so allowance existence
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
