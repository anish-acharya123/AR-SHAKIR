import { NavLink } from "react-router-dom";
import hamburger from "../assets/logo/hamburger.png";

function Navbar() {
  return (
    <>
      <nav className="bg-[#9fd4e9] flex items-center justify-center shadow-lg">
        <div className="flex items-center justify-between py-5 px-6  w-full max-w-[1440px]   md:px-10  ">
          <div className="text-[24px] lg:text-[32px] font-bold">AR SHAKIR</div>
          <div>
            <ul className=" gap-10 xl:gap-10 font-[200] text-[20px] hidden lg:flex">
              <NavLink>Product ▾ </NavLink>
              <NavLink>Template ▾</NavLink>
              <NavLink>Blog</NavLink>
              <NavLink>Pricing</NavLink>
            </ul>
            <div className=" lg:hidden ">
              <img src={hamburger} alt="hamburger" className="h-12 w-12" />
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-6 font-semibold">
            <button>SignUp</button>
            <button className="bg-[#4e47ba] p-4 rounded text-white hover:bg-blue-900">
              Start Free
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
