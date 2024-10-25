import { NavLink } from "react-router-dom";
import ProfileLogo from "../../assets/ProfileLogo.svg";
import Dropdown from "./Dropdown";
import LogoutButton from "../Auth/LogoutButton";

const DropdownContentLoggedIn = () => (
  <Dropdown
    trigger={<img src={ProfileLogo} alt="Profile" className="w-11 h-11" />}
  >
    <ul>
      <li>
        <NavLink to="/Profile">
          <button className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg text-text">
            Profile
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/UserSettings">
          <button className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg text-text">
            Settings
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard">
          <button className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg text-text">
            Dashboard
          </button>
        </NavLink>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  </Dropdown>
);

export default DropdownContentLoggedIn;
