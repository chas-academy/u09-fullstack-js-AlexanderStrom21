import { NavLink } from "react-router-dom";
import Catagories from "./Categories";
import CPlus from "../pages/homePages/cPlus/CPlus";
import CSharp from "../pages/homePages/cSharp/CSharp";
import Java from "../pages/homePages/java/Java";
import JavaScript from "../pages/homePages/javaScript/JavaScript";

const Test123 = () => {
  if (CPlus(Catagories)) {
    <NavLink to="/CPlusForum"></NavLink>;
  }
  if (CSharp(Catagories)) {
    <NavLink to="/CSharpForum"></NavLink>;
  }
  if (Java(Catagories)) {
    <NavLink to="/JavaForum"></NavLink>;
  }
  if (JavaScript(Catagories)) {
    <NavLink to="/JavaScript.forum"></NavLink>;
  } else {
    <NavLink to="/PhpForum"></NavLink>;
  }
};

export default Test123;
