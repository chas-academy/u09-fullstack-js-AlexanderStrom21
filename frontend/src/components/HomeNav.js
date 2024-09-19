import { NavLink } from "react-router-dom";

const HomeNav = () => {
  return (
    <>
      <nav class="flex justify-center">
        <ul class="flex">
          <li class="p-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li class="p-4">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li class="p-4">
            <NavLink to="/Register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HomeNav;