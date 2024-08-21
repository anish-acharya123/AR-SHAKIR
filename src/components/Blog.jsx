import React from "react";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";

function Blog() {
  return (
    <section className="flex justify-center items-center py-28">
      <div className="max-w-[1440px] w-full px-6 flex  flex-col gap-10 ">
        <h1 className=" font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-left leading-[130%]">
          Recent Blogs
        </h1>
        <div className="bg-[#F2F2F2] flex justify-between rounded-md">
          <div className="lg:p-10 p-4 grid gap-4">
            <span className="uppercase">Best practices</span>
            <h2 className="text-[23px] font-bold">
              In design active temper be uneasy. <br /> Thirty for remove plenty
              regard.
            </h2>
            <a href="#"> Read More</a>
          </div>
          <figure className="hidden md:block">
            <img src={blog1} alt="hllo" />
          </figure>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#F2F2F2] flex flex-col justify-between rounded-md gap-4 ">
            <div className="lg:p-8 p-4 grid gap-4">
              <span className="uppercase">Best practices</span>
              <h2 className="sm:text-[20px] text-[18px] font-bold">
                In design active temper be uneasy. <br /> Thirty for remove
                plenty regard.
              </h2>
            </div>
            <figure className=" bg-red-50">
              <img src={blog2} alt="hllo" className="w-full" />
            </figure>
          </div>
          <div className="bg-[#F2F2F2] flex flex-col justify-between rounded-md gap-4">
            <div className="lg:p-8 p-4 grid gap-4">
              <span className="uppercase">Best practices</span>
              <h2 className="sm:text-[20px] text-[18px] font-bold">
                In design active temper be uneasy. <br /> Thirty for remove
                plenty regard.
              </h2>
            </div>
            <figure className="">
              <img src={blog3} alt="hllo" className="w-full" />
            </figure>
          </div>
          <div className="bg-[#F2F2F2] flex flex-col justify-between rounded-md gap-4">
            <div className="lg:p-8 p-4 grid gap-4">
              <span className="uppercase">Best practices</span>
              <h2 className="sm:text-[20px] text-[18px]  font-bold">
                In design active temper be uneasy. <br /> Thirty for remove
                plenty regard.
              </h2>
            </div>
            <figure className="w-full">
              <img src={blog4} alt="hllo" className="w-full" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
