import React from "react";
import Track from "../assets/trackpayment/track-your-payments.png";
import elemt from "../assets/trackpayment/element.png";
import tick from "../assets/logo/tick.png";

function Trackpayment() {
  return (
    <section className="py-16 flex items-center justify-center">
      <div className="px-6 flex justify-between items-center lg:gap-20  w-full max-w-[1440px] md:px-10 ">
        <figure className="hidden md:block md:w-[70%] lg:w-[50%] relative ">
          <img
            src={elemt}
            alt=""
            className="absolute right-32 -translate-y-6 "
          />
          <img src={Track} alt="track-payment" className="object-contain" />
        </figure>

        <div className="flex flex-col gap-4 lg:w-[50%] md:w-[30%]">
          <span className="text-[#0202a5] font-bold">WHY CHOOSE US</span>
          <h1 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[130%]">
            Track your payments on the go with the best way possible
          </h1>
          <p>
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
          <hr className="bg-gray-300 h-1" />
          <div className=" grid gap-4">
            <div className="flex gap-2 items-center">
              <img src={tick} alt="tick" />
              <p>Get Overview at a glance</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={tick} alt="tick" />
              <p>Get Overview at a glance</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={tick} alt="tick" />
              <p>Get Overview at a glance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trackpayment;
