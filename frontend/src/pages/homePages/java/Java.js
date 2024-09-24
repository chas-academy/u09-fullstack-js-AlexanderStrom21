import { NavLink } from "react-router-dom";
import HelpForum from "../../../components/categories/HelpForum";
import Videos from "../../../components/categories/Videos";
import Documentation from "../../../components/categories/Documentation";
import FrameWork from "../../../components/categories/FrameWork";

const Java = () => {
  return (
    <>
      <div class="flex justify-center">
        <div class="bg-cyan-800 mt-10 w-3/4 rounded-lg pb-10">
          <h1 class="flex justify-center text-white font-bold	m-5">Java</h1>
          <NavLink to="/JavaForum">
            <HelpForum></HelpForum>
          </NavLink>
          <Videos></Videos>
          <Documentation></Documentation>
          <FrameWork></FrameWork>
        </div>
      </div>
    </>
  );
};

export default Java;
