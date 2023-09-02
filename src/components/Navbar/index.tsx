import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import content from "../../data";

const Navbar: React.FC<{}> = () => {
  const { navbar } = content;
  const [toggle, setToggle] = useState(false);

  const menuList = () => {
    return (
      <ul className="flex flex-col sm:items-center sm:flex-row">
        {navbar?.menus &&
          navbar.menus.map((menu) => (
            <li
              className="nav-item"
              key={menu}
              onClick={() => setToggle(!toggle)}
            >
              <a className="nav-link" href={`#${menu}`}>
                {menu}
              </a>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <nav className="absolute top-0 inset-x-0 px-10 py-8 flex justify-between items-center">
      <div>{navbar.logo}</div>
      {/* Desktop Navigation 640px up -> flex / below -> hidden */}
      <div className="sm:flex hidden">{menuList()}</div>

      {/* Mobile Navigation 640px up -> hidden / below -> flex */}
      <div className="sm:hidden flex items-center relative">
        <GiHamburgerMenu size={20} onClick={() => setToggle(!toggle)} />

        <div
          className={`absolute top-[30px] right-[0px] px-4 py-2 bg-[#191919] text-white min-w-[200px] ${
            toggle ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
          } transition-all duration-500 ease-in}`}
        >
          {menuList()}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
