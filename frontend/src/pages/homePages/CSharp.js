import { NavLink } from "react-router-dom";
import HelpForum from "../../components/categories/HelpForum";
import Videos from "../../components/categories/Videos";
import Documentation from "../../components/categories/Documentation";
import FrameWork from "../../components/categories/FrameWork";

const CSharp = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-background mt-10 w-3/4 rounded-lg pb-10">
          <h1 className="flex justify-center text-text font-bold	m-5">C#</h1>
          <NavLink to="/CSharpForum">
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

export default CSharp;
