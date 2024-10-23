import CSharp from "../assets/CSharp.svg";
import CPlus from "../assets/C++.svg";
import Java from "../assets/Java.svg";
import JavaScript from "../assets/JavaScript.svg";
import Php from "../assets/Php.svg";

import { NavLink } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      <section className="flex justify-evenly">
        <div className="flex m-5 flex-wrap justify-center">
          <div className="bg-secondary m-5 p-4 text-white">
            <NavLink to="/CSharp">
              <div>
                <img src={CSharp} alt="C# Logo" />
              </div>
              <h1 className="flex justify-center p-5">C#</h1>
            </NavLink>
          </div>

          <div className="bg-secondary m-5 p-4 text-white">
            <NavLink to="/Java">
              <div>
                <img src={Java} alt="Java Logo" />
              </div>
              <h1 className="flex justify-center p-5">Java</h1>
            </NavLink>
          </div>

          <div className="bg-secondary m-5 p-4 text-white">
            <NavLink to="/JavaScript">
              <div>
                <img src={JavaScript} alt="JavaScript Logo" />
              </div>
              <h1 className="flex justify-center p-5">JavaScript</h1>
            </NavLink>
          </div>

          <div className="bg-secondary m-5 p-4 text-white">
            <NavLink to="/CPlus">
              <div>
                <img src={CPlus} alt="C++ Logo" />
              </div>
              <h1 className="flex justify-center p-5">C++</h1>
            </NavLink>
          </div>

          <div className="bg-secondary m-5 p-4 text-white">
            <NavLink to="/Php">
              <div>
                <img src={Php} alt="Php Logo" />
              </div>
              <h1 className="flex justify-center p-5">PHP</h1>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
