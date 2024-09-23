import { NavLink } from "react-router-dom";
import HelpForum from "../../../components/categories/HelpForum";
import Videos from "../../../components/categories/Videos";
import Documentation from "../../../components/categories/Documentation";
import FrameWork from "../../../components/categories/FrameWork";

const CPlus = () => {
  return (
    <>
      <h1 class="flex justify-center">C++</h1>
      <NavLink to="/CPlusForum">
        <HelpForum></HelpForum>
      </NavLink>
      <Videos></Videos>
      <Documentation></Documentation>
      <FrameWork></FrameWork>
    </>
  );
};

export default CPlus;
