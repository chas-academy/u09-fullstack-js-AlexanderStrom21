import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/SiteLogo.svg";
import DropdownContentNotLoggedIn from "./dropdown/DropdownContentNotLoggedIn";
import DropdownContentLoggedIn from "./dropdown/DropdownContentLoggedIn";
import { useAuth } from "../hooks/authHooks/UseAuth";

const NavBar = () => {
  const { isAuthenticated } = useAuth(); // Assuming useAuth returns { isAuthenticated }

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
        {isAuthenticated ? (
          <DropdownContentLoggedIn />
        ) : (
          <DropdownContentNotLoggedIn />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
