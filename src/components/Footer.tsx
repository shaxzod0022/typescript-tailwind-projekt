import { styles } from "../util/styles";
import { footerLinks } from "../util/constant";

const Footer = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 size-full`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src=""
            className={`w-[250px] h-[72px] object-contain`}
            alt="logo"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli
          </p>
        </div>
        <div
          className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 `}
        >
          {footerLinks.map((link) => {
            return (
              <div
                key={footerLinks.title}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
                  {link.title}
                </h4>
                <ul className="list-none mt-3">
                  {link.links.map((item, idx) => {
                    return (
                      <li
                        key={item.name}
                        className={`font-montserrat font-normal text-[16px] text-white hover:text-secondary cursor-pointer${
                          idx !== link.links.length - 1 ? "mb-4" : "mb-0"
                        }`}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]"></div>
      <p className="font-montserrat font-normal text-start text-[18px] leading-[27px] text-white ">
        Copyright - 2023 SammyPay
      </p>
    </div>
  );
};

export default Footer;
