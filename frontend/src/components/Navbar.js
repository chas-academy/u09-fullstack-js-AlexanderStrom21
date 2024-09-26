import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/SiteLogo.svg";
import DropdownContentNotLoggedIn from "./DropdownContentNotLoggedIn";
import DropdownContentLoggedIn from "./DropdownContentLoggedIn";
import User from "../../../backend/model/User";
const NavBar = () => {
  if (User === null) {
    return (
      <>
        <nav className="bg-cyan-950 text-black ">
          <div className="grid grid-cols-8 p-2 items-center">
            <div className="flex w-14 h-14 ml-10 items-center">
              <NavLink to="/">
                <img
                  src={SiteLogo}
                  alt="Site Logo"
                  className="flex items-center"
                />
              </NavLink>
            </div>

            <div className="flex w-14 h-14 ml-10 items-center place-content-end col-start-8">
              <DropdownContentNotLoggedIn></DropdownContentNotLoggedIn>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="bg-cyan-950 text-black ">
          <div className="grid grid-cols-8 p-2 items-center">
            <div className="flex w-14 h-14 ml-10 items-center">
              <NavLink to="/">
                <img
                  src={SiteLogo}
                  alt="Site Logo"
                  className="flex items-center"
                />
              </NavLink>
            </div>

            <div className="flex w-14 h-14 ml-10 items-center place-content-end col-start-8">
              <DropdownContentLoggedIn></DropdownContentLoggedIn>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default NavBar;
