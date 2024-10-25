import { NavLink } from "react-router-dom";

const HomeNav = ({ navItems = [] }) => {
  return (
    <nav
      className="flex justify-center"
      aria-label="Programming Language Navigation"
    >
      <ul className="flex">
        {navItems.map(
          ({ name, path, enabled }) =>
            enabled && (
              <li key={name} className="p-4">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }
                >
                  {name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default HomeNav;
