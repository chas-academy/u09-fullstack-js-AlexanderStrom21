import { NavLink } from "react-router-dom";
import HelpForum from "../../components/categories/HelpForum";
import Videos from "../../components/categories/Videos";
import Documentation from "../../components/categories/Documentation";
import FrameWork from "../../components/categories/FrameWork";

const Java = () => {
  return (
    <>
      <div className="flex w-screen mt-6 max-w-2xl">
        <div className="bg-background mx-2 rounded-lg w-full py-5">
          <h1 className="flex justify-center text-text font-bold py-5">Java</h1>
          <NavLink to="/JavaForum">
            <HelpForum />
          </NavLink>
          <Videos />
          <Documentation />
          <FrameWork />
        </div>
      </div>
    </>
  );
};

export default Java;
