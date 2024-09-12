import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;