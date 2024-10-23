import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import ProfileLogo from "../../assets/ProfileLogo.svg";
import Logout from "../../pages/profile/Logout";

const DropdownContentLoggedIn = () => {
  const handleOptionClick = () => {};
  return (
    <>
      <Dropdown
        trigger={<img src={ProfileLogo} alt="Profile" className="w-10 h-10" />}
      >
        <ul>
          <li>
            <NavLink to="/Profile">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg text-text"
                onClick={() => handleOptionClick("Profile")}
              >
                Profile
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Settings">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg rounded-lg text-text"
                onClick={() => handleOptionClick("Settings")}
              >
                Settings
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg rounded-lg text-text"
                onClick={() => handleOptionClick("DashBoard")}
              >
                DashBoard
              </button>
            </NavLink>
          </li>
          <Logout></Logout>
        </ul>
      </Dropdown>
    </>
  );
};
export default DropdownContentLoggedIn;
