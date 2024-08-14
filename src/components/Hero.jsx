import playBtn from "../assets/logo/play-btn.png";
import tick from "../assets/logo/tick.png";

function Hero() {
  return (
    <header className="hero-section flex items-center justify-center">
      <div className=" py-16 lg:py-16 px-6 flex items-center  justify-between w-full max-w-[1440px]  md:px-10  ">
        <div className=" lg:w-1/2 flex gap-6 flex-col">
          <h1 className=" font-bold text-[30px] md:text-[44px] lg:text-[52px] text-left leading-[130%]">
            Managing freelance payments has never been easier
          </h1>
          <p className="font-semibold text-gray-600 text-[16px]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. travelling assistance indulgence
            unpleasing.
          </p>
          <div className="flex flex-col md:flex-row gap-6 ">
            <button className="w-full text-white p-4 hero-btn1 rounded-full">
              Get Started
            </button>
            <button className="w-full  p-4 md:p-2 rounded-full gap-4 flex items-center justify-center">
              <figure>
                <img src={playBtn} alt="play-btn" className="h-10 w-10" />
              </figure>
              <label>See how it works</label>
            </button>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
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
        <div className="hidden lg:block">anish</div>
      </div>
    </header>
  );
}

export default Hero;
