import linkedin from "../assets/footer/linkedin.png";
import messenger from "../assets/footer/messenger.png";
import twitter from "../assets/footer/twitter.png";
import instagram from "../assets/footer/instagram.png";

function Footer() {
  return (
    <footer className=" py-10 flex items-center justify-center">
      <div className="px-6 flex flex-col gap-4 md:justify-between md:flex-row  max-w-[1440px] w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] font-bold">AR SHAKIR</h1>
          <p className="text-[18px]">
            Finance helps companies <br /> manage payment easily
          </p>
          <figure className="flex  gap-4">
            <img src={linkedin} alt="" className="h-[32px] w-[32px]" />
            <img src={messenger} alt="" className="h-[32px] w-[32px]" />
            <img src={twitter} alt="" className="h-[32px] w-[32px]" />
            <img src={instagram} alt="" className="h-[32px] w-[32px]" />
          </figure>
        </div>
        <div className=" flex flex-col">
          <h1 className="text-[24px] font-semibold mb-2">Company</h1>
          <a href="#" className="text-[18px]">
            About us
          </a>
          <a href="#" className="text-[18px]">
            Carrers
          </a>
          <a href="#" className="text-[18px]">
            Blog
          </a>
          <a href="#" className="text-[18px]">
            Pricing
          </a>
        </div>
        <div className=" flex flex-col">
          <h1 className="text-[24px] font-semibold mb-2">Resources</h1>
          <a href="#" className="text-[18px]">
            Proposal Template
          </a>
          <a href="#" className="text-[18px]">
            Invoice Template
          </a>
          <a href="#" className="text-[18px]">
            Tutorial
          </a>
          <a href="#" className="text-[18px]">
            How to write a contract
          </a>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-[24px] font-semibold mb-2">
            Join Our NewsLetter
          </h1>

          <div>
            <input
              type="text"
              className="outline-none border-none p-2 bg-sky-100"
              placeholder="Your email address"
            />
            <button className="bg-blue-900 p-2 text-white">Subscribe</button>
          </div>

          <p className="text-[18px] max-w-[16rem]">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
