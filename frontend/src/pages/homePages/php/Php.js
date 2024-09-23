import { NavLink } from "react-router-dom";
import HelpForum from "../../../components/categories/HelpForum";
import Videos from "../../../components/categories/Videos";
import Documentation from "../../../components/categories/Documentation";
import FrameWork from "../../../components/categories/FrameWork";

const Php = () => {
  return (
    <>
      <h1 class="flex justify-center">Php</h1>
      <HelpForum>
        <NavLink to="/Phpforum"></NavLink>
      </HelpForum>
      <Videos></Videos>
      <Documentation></Documentation>
      <FrameWork></FrameWork>
    </>
  );
};

export default Php;
