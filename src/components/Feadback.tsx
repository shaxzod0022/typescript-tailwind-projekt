import { tred } from "../assets";

const Feadback = () => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[360px] md:mr-10 sm:mr-5 mr-0 my-5`}
    >
      <img
        src={tred}
        alt="hello"
        className="w-[42px] h-[27px] object-contain"
      />
      <p
        className={`font-montserrat font-normal leading-[32px] text-[18px] text-white my-10`}
      >
        {content}
      </p>
      <div className="flex flex-row">
        <div className="w-[50px]  h-[50px] flex justify-center items-center bg-slate-500 rounded-full text-[22px] font-semibold font-montserrat">
          {name}
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feadback;
