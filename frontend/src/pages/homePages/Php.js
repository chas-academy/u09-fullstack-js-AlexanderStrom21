import { NavLink } from "react-router-dom";
import HelpForum from "../../components/categories/HelpForum";
import Videos from "../../components/categories/Videos";
import Documentation from "../../components/categories/Documentation";
import FrameWork from "../../components/categories/FrameWork";

const Php = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-cyan-800 mt-10 w-3/4 rounded-lg pb-10">
          <h1 className="flex justify-center text-white font-bold	m-5">Php</h1>
          <NavLink to="/Phpforum">
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

export default Php;
