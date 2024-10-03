import { layout, styles } from "../util/styles";
import { appStoreImg, billing, googleImg } from "../assets";
import { FC } from "react";

const Billing: FC = (): JSX.Element => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={billing}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Hisob kitob va factorial <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          facilis voluptatum aperiam porro distinctio reprehenderit incidunt
          rerum architecto vitae officia!
        </p>
        <div className={`flex flex-row gap-8 flex-wrap sm:mt-10 mt-6`}>
          <img
            className="w-[150px] rounded-full cursor-pointer"
            src={googleImg}
            alt="google"
          />
          <img
            className="w-[150px] rounded-full cursor-pointer"
            src={appStoreImg}
            alt="apple"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
