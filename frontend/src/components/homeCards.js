import HappyJoseph from "../assets/HappyJoseph.png";
import { NavLink } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      <section className="flex justify-evenly">
        <div className="flex m-5 flex-wrap justify-center">
          <div className="bg-cyan-950 m-5 p-4 text-white">
            <NavLink to="/CSharp">
              <div>
                <img src={HappyJoseph} alt="C# Logo" />
              </div>
              <h1 className="flex justify-center p-5">C#</h1>
            </NavLink>
          </div>

          <div className="bg-cyan-950 m-5 p-4 text-white">
            <NavLink to="/Java">
              <div>
                <img src={HappyJoseph} alt="Java Logo" />
              </div>
              <h1 className="flex justify-center p-5">Java</h1>
            </NavLink>
          </div>

          <div className="bg-cyan-950 m-5 p-4 text-white">
            <NavLink to="/JavaScript">
              <div>
                <img src={HappyJoseph} alt="JavaScript Logo" />
              </div>
              <h1 className="flex justify-center p-5">JavaScript</h1>
            </NavLink>
          </div>

          <div className="bg-cyan-950 m-5 p-4 text-white">
            <NavLink to="/CPlus">
              <div>
                <img src={HappyJoseph} alt="C++ Logo" />
              </div>
              <h1 className="flex justify-center p-5">C++</h1>
            </NavLink>
          </div>

          <div className="bg-cyan-950 m-5 p-4 text-white">
            <NavLink to="/Php">
              <div>
                <img src={HappyJoseph} alt="Php Logo" />
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
