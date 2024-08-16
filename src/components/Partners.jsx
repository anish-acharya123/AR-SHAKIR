import { Partner } from "../util/partners";

function Partners() {
  return (
    <section className=" flex bg-gray-100 justify-center">
      <div className="py-16  px-6 flex flex-col   md:px-10  gap-10  w-full max-w-[1440px]">
        <h1 className="text-[24px] font-bold text-center">
          Over 32k+ software businesses growing with AR Shakir.
        </h1>

        <div className="flex gap-6 overflow-hidden justify-between ">
          {Partner.map((item) => (
            <img key={item.id} src={item.img} alt={`Partner ${item.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
