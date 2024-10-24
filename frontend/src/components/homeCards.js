import { NavLink } from "react-router-dom";

import CSharp from "../assets/CSharp.svg";
import CPlus from "../assets/C++.svg";
import Java from "../assets/Java.svg";
import JavaScript from "../assets/JavaScript.svg";
import Php from "../assets/Php.svg";

const languages = [
  { name: "C#", path: "/CSharp", logo: CSharp },
  { name: "Java", path: "/Java", logo: Java },
  { name: "JavaScript", path: "/JavaScript", logo: JavaScript },
  { name: "C++", path: "/CPlus", logo: CPlus },
  { name: "PHP", path: "/Php", logo: Php },
];

const HomeCards = () => {
  return (
    <section className="max-w-md flex flex-wrap">
      {languages.map(({ name, path, logo }) => (
        <div
          key={name}
          className="bg-background text-text rounded-lg shadow-lg m-5 w-full "
        >
          <NavLink to={path} className="flex flex-row items-center p-4 ">
            <img className="rounded-lg mr-5" src={logo} alt={`${name} Logo`} />
            <h1 className="">{name}</h1>
          </NavLink>
        </div>
      ))}
    </section>
  );
};

export default HomeCards;
