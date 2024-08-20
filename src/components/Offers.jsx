import quote from "../assets/offers/quote-icon.png";
import { Offer } from "../util/offers";
function Offers() {
  return (
    <section className="py-16  lg:py-24  flex justify-center ">
      <div className=" max-w-[1440px] px-6 gap-20 flex-col w-full flex justify-between ">
        <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-6 ">
          <div className="py-4 flex  gap-4 flex-col">
            <h1 className="text-[34px] md:text-[36px] lg:text-[52px] font-bold leading-[130%]">
              Automated <br /> portfolio tracking
            </h1>
            <p className="text-[18px] font-[400] md:w-[30rem] max-w-[30rem]">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4  bg-[#f4f6f9] p-8   md:w-[30rem] relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {Offer.map((item) => (
            <div
              key={item.id}
              className="flex relative  flex-col justify-between gap-4 text-center md:pt-28 lg:pt-28 p-10 border-2 items-center border-gray-300 rounded-[1rem]"
            >
              <span className="absolute left-5 top-5 font-semibold text-[23px}">
                {"0" + item.id}
              </span>
              <figure>
                <img src={item.img} alt={item.id} />
              </figure>
              <h3 className="text-[23px] font-bold">{item.title}</h3>
              <p className="opacity-70">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
