import { layout, styles } from "../util/styles";
import Button from "./Button";
import { features } from "../util/constant";

const Busines = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Biznesni rivojlantiring, <br className="sm:block hidden" /> pul
          ishlang
        </h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto
          modi deserunt debitis libero consequatur?
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((featur, idx) => {
          return (
            <div key={idx} className={`flex flex-row p-6 rounded-[20px]`}>
              <div
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}
              >
                <img
                  src={featur.icon}
                  alt={featur.title}
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1">
                  {featur.title}
                </h4>
                <p className={`${styles.paragraph}`}>{featur.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Busines;
