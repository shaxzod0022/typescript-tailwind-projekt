import { FC } from "react";
interface Props {
  styles: string;
}

const Button: FC<Props> = ({ styles }): JSX.Element => {
  return (
    <button
      type="button"
      className={`py-3 px-6 font-montserrat font-medium text-[17px] bg-blue-gradient rounded-[10px] outline-none active:text-white ${
        styles as string
      }`}
    >
      Boshlash
    </button>
  );
};

export default Button;
