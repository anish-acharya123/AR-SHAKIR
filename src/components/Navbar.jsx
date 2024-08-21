import { NavLink } from "react-router-dom";
import hamburger from "../assets/logo/hamburger.png";
import cut from "../assets/logo/cross.png";
import { useState } from "react";

function Navbar() {
  const [cross, setCross] = useState(false);

  return (
    <>
      <nav className="bg-[#9fd4e9] flex items-center justify-center md:border-none border-b-2 overflow-hidden">
        <div className="flex items-center justify-between py-5 px-6  w-full max-w-[1440px]   md:px-10  ">
          <div className="text-[24px] lg:text-[32px] font-bold">AR SHAKIR</div>
          <div>
            <ul
              className={`  lg:gap-10 font-[200] text-[20px]  lg:flex lg:flex-row lg:static lg:translate-x-0 lg:border-none transition-all lg:p-0 lg:bg-none  ${
                cross ? "translate-x-[0%]" : " hidden translate-x-[100%]"
              } z-100 absolute top-20 right-0 p-20 h-full gap-20 bg-[rgb(159,212,233)]  border-t-2 border-white flex flex-col`}
            >
              <NavLink className="font-semibold">Product ▾ </NavLink>
              <NavLink className="font-semibold">Template ▾</NavLink>
              <NavLink className="font-semibold">Blog</NavLink>
              <NavLink className="font-semibold">Pricing</NavLink>
            </ul>
            <div className=" lg:hidden " onClick={() => setCross(!cross)}>
              {cross ? (
                <img src={cut} alt="cross" className="h-12 w-12" />
              ) : (
                <img src={hamburger} alt="hamburger" className="h-12 w-12" />
              )}
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-6 font-semibold">
            <button>SignUp</button>
            <button className="bg-[#4e47ba] px-8 py-4  text-white hover:bg-blue-900">
              Start Free
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
