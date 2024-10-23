import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/SiteLogo.svg";
import DropdownContentNotLoggedIn from "../components/dropdown/DropdownContentNotLoggedIn";
import DropdownContentLoggedIn from "../components/dropdown/DropdownContentLoggedIn";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="bg-navbar text-black">
      <div className="grid grid-cols-8 p-2 items-center">
        <div className="flex w-14 h-14 ml-10 items-center">
          <NavLink to="/">
            <img src={SiteLogo} alt="Site Logo" className="flex items-center" />
          </NavLink>
        </div>

        <div className="flex w-14 h-14 ml-10 items-center place-content-end col-start-8">
          {isLoggedIn ? (
            <DropdownContentLoggedIn />
          ) : (
            <DropdownContentNotLoggedIn />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
