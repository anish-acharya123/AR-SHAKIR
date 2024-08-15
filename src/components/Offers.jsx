import quote from "../assets/offers/quote-icon.png";
function Offers() {
  return (
    <section className="py-10  lg:py-20  flex justify-center ">
      <div className=" max-w-[1440px] px-6  flex-col w-full flex justify-between ">
        <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-4 ">
          <div className="py-4 flex  gap-4 flex-col">
            <h1 className="text-[30px] font-bold">
              Automated <br /> portfolio tracking
            </h1>
            <p className="text-[18px] font-[400] md:w-[30rem]">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
          </div>
          <div className="flex flex-col gap-4  bg-gray-200 p-4 md:w-[30rem] relative">
            <figure className="absolute top-0">
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
        <div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
