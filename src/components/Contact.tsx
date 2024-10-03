import { layout, styles } from "../util/styles";
import { sectionImg } from "../assets";
import Button from "./Button";

const Contract = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Bir necha oson qadamda <br /> kontrakt tuzish
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          autem!
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={sectionImg} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
