import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import ProfileLogo from "../assets/ProfileLogo.svg";

const DropdownContentNotLoggedIn = () => {
  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
  };
  return (
    <>
      <Dropdown
        trigger={<img src={ProfileLogo} alt="Profile" className="w-10 h-10" />}
      >
        <ul>
          <li>
            <NavLink to="/Login">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                onClick={() => handleOptionClick("Login")}
              >
                Login
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Register">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                onClick={() => handleOptionClick("Register")}
              >
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </Dropdown>
    </>
  );
};
export default DropdownContentNotLoggedIn;
