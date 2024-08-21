import React from "react";
import user from "../assets/stats/user.png";
import star from "../assets/stats/star.png";

function Stats() {
  return (
    <section className="flex items-center justify-center bg-[#3734A9] py-20">
      <div className="px-6 max-w-[1440px] w-full text-white flex flex-col md:flex-row gap-10 justify-center md:justify-between items-center ">
        <p className="text-[24px]">
          We speak with our <br /> powerful statistics
        </p>
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[130%]">
            1M+
          </h2>
          <div className="flex gap-4 items-center">
            <figure>
              <img src={user} alt="" className="h-4" />
            </figure>
            <p>Active User</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[130%]">
            30K+
          </h2>
          <div className="flex gap-4 items-center">
            <figure>
              <img src={star} alt="" className="h-4" />
            </figure>
            <p>5-Stars Reviews</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[130%]">
            $252M
          </h2>
          <div className="flex gap-4 items-center">
            <figure>
              <img src={star} alt="" className="h-4" />
            </figure>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
