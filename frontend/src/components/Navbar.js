import { NavLink } from "react-router-dom";
import SiteLogo from "../assets/SiteLogo.svg";
import ProfileLogo from "../assets/ProfileLogo.svg";
import Dropdown from "./Dropdown";
const NavBar = () => {
  return (
    <>
      <nav class="bg-cyan-950 text-black ">
        <Dropdown></Dropdown>
        <div class="grid grid-cols-3 p-2 items-center">
          <div class="flex w-14 h-14 ml-10 items-center">
            <NavLink to="/">
              <img src={SiteLogo} alt="Site Logo" class="flex items-center" />
            </NavLink>
          </div>
          <ul class="flex justify-center space-x-20 ">
            <li class="">
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li class="">
              <NavLink to="/Register">Register</NavLink>
            </li>
          </ul>
          {Dropdown()}
          <button onClick={}>
            <img src={ProfileLogo} alt="Profile Logo" />
          </button>
          <div class="flex items-center justify-self-end w-14 h-14  mr-10">
            <NavLink to="/Dashboard">
              <img src={ProfileLogo} alt="Profile Logo" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
