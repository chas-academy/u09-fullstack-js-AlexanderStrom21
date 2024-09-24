import { NavLink } from "react-router-dom";

const HomeNav = ({ CPlusNav, CSharpNav, JavaNav, JavaScriptNav, PhpNav }) => {
  return (
    <nav className="flex justify-center">
      <ul className="flex">
        {CPlusNav && (
          <li className="p-4">
            <NavLink to="/CPlus">C++</NavLink>
          </li>
        )}

        {CSharpNav && (
          <li className="p-4">
            <NavLink to="/CSharp">C#</NavLink>
          </li>
        )}
 
        {JavaNav && (
          <li className="p-4">
            <NavLink to="/Java">Java</NavLink>
          </li>
        )}

        {JavaScriptNav && (
          <li className="p-4">
            <NavLink to="/JavaScript">JavaScript</NavLink>
          </li>
        )}

        {PhpNav && (
          <li className="p-4">
            <NavLink to="/Php">PHP</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HomeNav;
