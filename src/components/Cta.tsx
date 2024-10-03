import { styles } from "../util/styles";
import Button from "./Button";

const Cta = () => {
  return (
    <div
      className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Ximatlarni sinab ko'ramiz</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, placeat
          qui praesentium incidunt voluptatem ullam
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-10 mt-0`}>
        <Button />
      </div>
    </div>
  );
};

export default Cta;
