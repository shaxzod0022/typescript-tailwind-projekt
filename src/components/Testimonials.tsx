import { styles } from "../util/styles";
import { feadback } from "../util/constant";
import { tred } from "../assets";

const Testimonials = () => {
  return (
    <div
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"></div>
      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h2 className={`${styles.heading2}`}>
          Odamlar biz haqimizda <br className="sm:flex hidden" /> qanday fikrda
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px] `}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            quia dignissimos sit ipsa debitis quibusdam explicabo?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-between justify-center w-full relative z-[1]">
        {feadback.map((item, idx) => {
          return (
            <div
              key={idx}
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
                {item.content}
              </p>
              <div className="flex flex-row">
                <div className="w-[50px]  h-[50px] flex justify-center items-center bg-slate-500 rounded-full ">
                  <p className="text-[22px] font-semibold font-montserrat">
                    {item.name
                      .split(" ")
                      .map((a) => a[0])
                      .join(".")
                      .toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-col ml-4">
                  <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
                    {item.name}
                  </h4>
                  <p className="font-montserrat font-normal text-[16px] leading-[24px] text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
