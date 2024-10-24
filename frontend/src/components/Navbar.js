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
    <nav className="bg-navbar text-black p-2 w-screen flex justify-between items-center px-4">
      <NavLink to="/" className="flex">
        <img
          src={SiteLogo}
          alt="Site Logo"
          className="w-14 h-14 object-contain"
        />
      </NavLink>

      <div>
        {isLoggedIn ? (
          <DropdownContentLoggedIn />
        ) : (
          <DropdownContentNotLoggedIn />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
