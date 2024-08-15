import playBtn from "../assets/logo/play-btn.png";
import tick from "../assets/logo/tick.png";
import heroimg from "../assets/logo/hero-section-img.png";

function Hero() {
  return (
    <header className="bg-[#9fd4e9] py-16  flex items-center justify-center overflow-hidden">
      <div className=" px-6  flex  justify-between w-full max-w-[1440px]  md:px-10  ">
        <div className="lg:pt-16 lg:w-1/2 flex lg:gap-10 gap-6 flex-col">
          <h1 className=" font-bold text-[34px] sm:text-[44px] lg:text-[52px] text-left leading-[130%]">
            Managing freelance payments has never been easier
          </h1>
          <p className="font-semibold text-gray-600 text-[16px]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. travelling assistance indulgence
            unpleasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 font-semibold">
            <button className="w-full text-white p-4 sm:p-2 bg-[#4e47ba] hover:bg-[#3a31b4] rounded-full">
              Get Started
            </button>
            <button className="w-full  p-4  sm:p-2 rounded-full gap-4 flex items-center justify-center">
              <figure>
                <img src={playBtn} alt="play-btn" className="h-10 w-10" />
              </figure>
              <label>See how it works</label>
            </button>
          </div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <div className="flex gap-2 items-center">
              <figure>
                <img src={tick} alt="tick" />
              </figure>
              <label>Free Register</label>
            </div>
            <div className="flex gap-2 items-center">
              <figure>
                <img src={tick} alt="tick" />
              </figure>
              <label>Free Register</label>
            </div>
          </div>
        </div>
        <div className="hidden lg:block hero-img">
          <figure>
            <img src={heroimg} alt="Hero-img" />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Hero;
