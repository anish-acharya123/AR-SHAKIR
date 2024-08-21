import React from "react";
import plus from "../assets/faq/plus.png";
import message from "../assets/faq/message.png";

function FAQ() {
  return (
    <section className="bg-[#F4F6F9] flex justify-center py-20">
      <div className="max-w-[1440px] w-full flex flex-col px-6 gap-10">
        <h1 className=" font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-left leading-[130%]">
          Frequently <br />
          asked questions
        </h1>
        <div className="flex flex-col md:flex-row  sm:justify-between gap-6 md:gap-10">
          <div className="flex flex-col gap-6 md:w-[60%]">
            <div className=" bg-white border-gray-300 border-2 px-4 py-4 rounded flex gap-2 justify-between items-center">
              <div className="flex flex-col gap-2 w-fit">
                <h3 className="md:text-[23px] text-[18px]  font-bold">
                  The expense windows adapted sir. Wrong widen drawn.
                </h3>
                <p className=" text-[15px]">
                  Offending belonging promotion provision an be oh consulted
                  ourselves it. Blessing welcomed ladyship she met humoured sir
                  breeding her.
                </p>
              </div>
              <figure className="">
                <img src={plus} alt="" className="h-[1.5rem]" />
              </figure>
            </div>
            <div className="bg-white border-gray-300 border-2 flex  px-4 py-4 rounded justify-between items-center gap-2">
              <h3 className="md:text-[23px] text-[18px] font-bold">
                The expense windows adapted sir. Wrong widen drawn.
              </h3>

              <figure>
                <img src={plus} alt="" className="h-[1.5rem]" />
              </figure>
            </div>
            <div className="bg-white border-gray-300 border-2 flex px-4 py-4 rounded justify-between items-center gap-2">
              <h3 className="md:text-[23px] text-[18px] font-bold">
                The expense windows adapted sir. Wrong widen drawn.
              </h3>

              <figure>
                <img src={plus} alt="" className="h-[1.5rem]" />
              </figure>
            </div>
            <div className="bg-white border-gray-300 border-2 flex  px-4 py-4 rounded justify-between items-center gap-2">
              <h3 className="md:text-[23px] text-[18px] font-bold">
                The expense windows adapted sir. Wrong widen drawn.
              </h3>

              <figure>
                <img src={plus} alt="" className="h-[1.5rem]" />
              </figure>
            </div>
            <div className="bg-white border-gray-300 border-2 flex  px-4 py-4 rounded justify-between items-center gap-2">
              <h3 className="md:text-[23px] text-[18px] font-bold">
                The expense windows adapted sir. Wrong widen drawn.
              </h3>

              <figure>
                <img src={plus} alt="" className="h-[1.5rem]" />
              </figure>
            </div>
          </div>
          <div className="md:w-[40%] border-2 p-4 flex flex-col justify-center items-center bg-white gap-10">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <figure>
                <img src={message} alt="" className="h-20" />
              </figure>
              <h2 className="md:text-[23px] text-[18px] font-bold text-center">
                Do you have more questions?
              </h2>
              <p>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
            </div>
            <div>
              <button className="border-none p-4 rounded bg-[#F37702] text-white">
                Shoot a Direct Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
