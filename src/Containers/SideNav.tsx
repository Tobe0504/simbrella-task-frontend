"use client";
import Input from "../Components/Input";
import Close from "../Assests/Svgs/CloseIcon";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assests/Images/simbrellaLogo.svg";
import { routeComponents } from "../Utilities/routeComponents";

type SideNavTypes = {
  onClose?: () => void;
};

const SideNav = ({ onClose }: SideNavTypes) => {
  // Router
  const location = useLocation();

  const routes = routeComponents.filter((data) =>
    data?.properties?.includes("isHeaderRoute")
  );

  return (
    <nav className="lg:basis-[279px] basis-0 py-8 lg:px-6 relative overflow-y-auto no-scrollbar">
      <div className="flex items-center gap-2.5 mb-6 lg:px-0 px-4">
        <img src={logo} alt="Logo" />

        <Close
          height="24"
          width="24"
          className="ml-auto cursor-pointer lg:hidden"
          onClick={onClose}
        />
      </div>

      <div className="mt-2 py-4">
        {routes.map((route) => {
          return (
            <Link
              to={route.route}
              key={route.route}
              className={`flex items-center gap-3 px-3 py-2 rounded-md mb-2 text-blue-200 hover:bg-grey-300 ${
                location?.pathname?.includes(route.route) && "bg-grey-300"
              }`}
            >
              <span className="font-main text-base font-medium text-blue-100">
                {route.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNav;
