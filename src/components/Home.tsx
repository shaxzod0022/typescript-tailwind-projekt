import { styles } from "../util/styles";
import { animationImg } from "../assets";
import Button from "./Button";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Animation image */}
      <div className={`md:my-0 my-10 relative flex-1 ${styles.flexStart}`}>
        <img
          src={animationImg}
          alt="robot"
          className="w-[100%] h-[100%] relative z-10 rounded-lg"
        />
      </div>
      {/* Infarmation */}
      <div
        className={`flex-1 ${styles.flexStart} relative flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Discount information */}
        <div className="py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> chegirma{" "}
            <span className="text-white">1 oyga</span> xisob uchun
          </p>
        </div>

        {/* Titile */}
        <div>
          <h1 className={`${styles.heading1}`}>
            Yangi Avlog <br />{" "}
            <span className="text-gradient">To'lov Usuli</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem qui a
          sequi quaerat odit optio nihil ullam sint tenetur. Neque. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Fugit, eligendi?
        </p>

        <Button styles={`mt-2`} />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient"></div>
        <div className="absolute z-[1] w-[80%] h-80%] rounded-full bottom-40 white-gradient"></div>
        <div className=" absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue-gradient"></div>
      </div>
    </section>
  );
};

export default Home;
