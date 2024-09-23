import { NavLink } from "react-router-dom";
import HelpForum from "../../../components/categories/HelpForum";
import Videos from "../../../components/categories/Videos";
import Documentation from "../../../components/categories/Documentation";
import FrameWork from "../../../components/categories/FrameWork";

const CSharp = () => {
  return (
    <>
      <h1 class="flex justify-center">C#</h1>
      <NavLink to="/CSharpForum">
        <HelpForum></HelpForum>
      </NavLink>
      <Videos></Videos>
      <Documentation></Documentation>
      <FrameWork></FrameWork>
    </>
  );
};

export default CSharp;
