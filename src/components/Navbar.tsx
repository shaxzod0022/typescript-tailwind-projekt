import { styles } from "../util/styles";
import { navigationLinks } from "../util/constant";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");
  const toggleBtn = () => setToggleNav((prev) => !prev);

  return (
    <div className={`${styles.flexBetween}w-full py-4`}>
      {/* Logo */}
      <div className={`${styles.heading2}`}>Logo</div>
      {/* Navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((item, id) => {
          return (
            <li
              onClick={() => setActive(item.id)}
              className={`${
                id === navigationLinks.length - 1 ? "mr-0" : "mr - 10"
              } ${active === item.id ? "text-blue-400" : "text-white"}
              hover:text-blue-400 font-montserrat font-normal cursor-pointer text-[16px] mr-10`}
              key={id}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      {/* Navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <button onClick={toggleBtn} className={`text-white`}>
          {toggleNav ? `x` : `=`}
        </button>
        <div
          className={`${
            toggleNav ? "flex" : "hidden"
          } top-20 z-50 left-0 right-0 my-7 absolute w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex flex-col justify-center py-2 items-center flex-1">
            {navigationLinks.map((item, id) => {
              return (
                <li
                  onClick={() => setActive(item.id)}
                  className={`${
                    active === item.id ? "text-blue-400" : "text-white"
                  }
                hover:text-blue-400 font-montserrat font-normal cursor-pointer text-[16px]`}
                  key={id}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
