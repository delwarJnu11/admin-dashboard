import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-3 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-3 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover: text-black hover:bg-light m-2";
  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              className="flex items-center ml-3 gap-3 text-xl mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
              to="/"
              onClick={() => setActiveMenu(false)}
            >
              <SiShopware /> Shoppy
            </Link>
            <TooltipComponent content={"Menu"} position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full mt-4 block hover:bg-light-gray p-3"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 mt-4 m-3 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
