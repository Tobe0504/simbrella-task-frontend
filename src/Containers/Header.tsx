import { Link, useLocation } from "react-router-dom";
import User from "../Assests/Svgs/User";
import { routeComponents } from "../Utilities/routeComponents";
import simbrellaLogo from "../Assests/Images/simbrellaLogo.svg";
import { useRef, useState } from "react";
import Modal from "../Components/Modal";
import UserProfile from "./UserProfile";
import { setAllModalsFalse } from "../Helpers/setAllModalsFalse";
import { genericModalType } from "../Utilities/types";
import Hamburger from "../Assests/Svgs/Hamburger";
import SideNav from "./SideNav";

const Header = () => {
  // States
  const [modals, setModals] = useState<genericModalType>({
    user: false,
  });

  //   Router
  const location = useLocation();

  //  Refs
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  //   Utils
  const openSideNav = () => {
    if (sideNavRef.current) {
      sideNavRef.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNavRef.current) {
      sideNavRef.current.style.width = "0%";
    }
  };

  const navRoutes = routeComponents.filter((data) => {
    return data?.properties?.includes("isProtected");
  });

  return (
    <>
      {modals.user && (
        <Modal
          body={
            <UserProfile
              onClose={() => {
                setAllModalsFalse(setModals);
              }}
            />
          }
          onClick={() => {
            setAllModalsFalse(setModals);
          }}
        />
      )}

      <header className="hidden lg:flex items-center justify-between gap-4 h-[70px] sticky top-0 bg-white z-20">
        <img
          src={simbrellaLogo}
          alt="Simbrella Logo"
          className="h-[40px] w-[150px]"
        />

        <nav className="flex items-center gap-1 p-2 rounded-[500px] bg-grey-100">
          {navRoutes.map((route) => {
            return (
              <Link
                className={`py-2 px-4 rounded-[54px] font-main text-sm ${
                  location.pathname.includes(route?.route)
                    ? "bg-white shadow-100 text-blue-100 font-bold"
                    : "font-normal text-grey-200 "
                } `}
                to={route.route}
                key={route.route}
              >
                {route.title}
              </Link>
            );
          })}
        </nav>

        <User
          onClick={() => {
            setModals((prevState) => {
              return { ...prevState, user: true };
            });
          }}
        />
      </header>

      <header className="flex lg:hidden  items-center justify-between gap-4 h-[70px] sticky top-0 bg-white z-20 px-4 ">
        <Hamburger onClick={openSideNav} />

        <h1>
          {navRoutes?.find((route) => route?.route === location?.pathname)
            ?.title || "Dashboard"}
        </h1>

        <User
          onClick={() => {
            setModals((prevState) => {
              return { ...prevState, user: true };
            });
          }}
        />

        <div
          className="fixed w-0 left-0 top-0 bg-white z-10 h-dvh transition-all duration-100 ease-in-out overflow-auto no-scrollbar"
          ref={sideNavRef}
        >
          <SideNav onClose={closeSideNav} />
        </div>
      </header>
    </>
  );
};

export default Header;
