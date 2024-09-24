import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/SiteLogo.svg";
import DropdownContentNotLoggedIn from "./DropdownContentNotLoggedIn";
const NavBar = () => {
  return (
    <>
      <nav class="bg-cyan-950 text-black ">
        <div class="grid grid-cols-8 p-2 items-center">
          <div class="flex w-14 h-14 ml-10 items-center">
            <NavLink to="/">
              <img src={SiteLogo} alt="Site Logo" class="flex items-center" />
            </NavLink>
          </div>

          <div class="flex w-14 h-14 ml-10 items-center place-content-end col-start-8">
            <DropdownContentNotLoggedIn></DropdownContentNotLoggedIn>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
