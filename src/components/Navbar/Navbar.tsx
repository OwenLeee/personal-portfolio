import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LightBoxContext } from "../../context";
import { navbar } from "../../data/contents";

const Navbar: React.FC<{}> = () => {
  const { setCurrentLightBoxId } = useContext(LightBoxContext);
  const [toggle, setToggle] = useState(false);

  const menuList = () => {
    return (
      <ul className="flex flex-col sm:items-center sm:flex-row">
        {navbar?.menus !== null &&
          navbar.menus.map((menu, idx) => (
            <li
              className="nav-item"
              key={`${menu}-${idx}`}
              onClick={() => {
                setCurrentLightBoxId(menu);
                setToggle(!toggle);
              }}
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
    <nav className="absolute top-0 inset-x-0 px-10 py-4 flex justify-between items-center bg-transparent text-white z-10">
      <img
        src="static/logo.svg"
        className="h-14 bg-auto bg-center relative top-1"
        alt="OWENTECH"
      />

      {/* Desktop Navigation 640px up -> flex / below -> hidden */}
      <div className="sm:flex hidden">{menuList()}</div>

      {/* Mobile Navigation 640px up -> hidden / below -> flex */}
      <div className="sm:hidden flex items-center relative">
        <GiHamburgerMenu size={20} onClick={() => setToggle(!toggle)} />

        <div
          className={`absolute top-[30px] right-[0px] px-4 py-2 bg-[#191919]/90 text-white min-w-[200px] ${
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
