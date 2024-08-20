import React from "react";
import quote from "../assets/offers/quote-icon.png";
import balance from "../assets/transaction/total-balance.png";
function Transaction() {
  return (
    <section className="flex items-center justify-center py-20">
      <div className=" justify-between px-6 w-full max-w-[1440px] flex flex-col md:flex-row">
        <div className="flex flex-col gap-10 md:w-[50%]">
          <span className="text-[#0202a5] font-bold">WHY CHOOSE US</span>
          <h1 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[100%]">
            Save money with proper transaction
          </h1>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          <div className="flex flex-col justify-center gap-4  bg-[#f4f6f9] p-8  mt-4   lg:w-[30rem] relative">
            <figure className="absolute top-0 -translate-y-5">
              <img src={quote} alt="" />
            </figure>
            <p>
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows adapted sir.
              Wrong widen.
            </p>
            <h2 className="font-bold">- Mike Taylor, Web Designer</h2>
          </div>
        </div>
        <div className="md:w-[50%]">
          <figure>
            <img src={balance} alt="transaction" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
