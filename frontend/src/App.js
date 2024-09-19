import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./index.css";
import Home from "./pages/Home";
import CPlus from "./pages/homePages/cPlus/CPlus";
import CSharp from "./pages/homePages/cSharp/CSharp";
import Java from "./pages/homePages/java/Java";
import JavaScript from "./pages/homePages/javaScript/JavaScript";
import Php from "./pages/homePages/php/Php";
import CPlusForum from "./pages/homePages/cPlus/cPlusForum";
import CSharpForum from "./pages/homePages/cSharp/cSharpForum";
import JavaForum from "./pages/homePages/java/JavaForum";
import JavaScriptForum from "./pages/homePages/javaScript/JavaScriptForum";
import PhpForum from "./pages/homePages/php/Phpforum";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CPlus" element={<CPlus />} />
        <Route path="/CSharp" element={<CSharp />} />
        <Route path="/Java" element={<Java />} />
        <Route path="/JavaScript" element={<JavaScript />} />
        <Route path="/Php" element={<Php />} />
        <Route path="/CPlusForum" element={<CPlusForum />} />
        <Route path="/CSharpForum" element={<CSharpForum />} />
        <Route path="/JavaForum" element={<JavaForum />} />
        <Route path="/JavaScriptForum" element={<JavaScriptForum />} />
        <Route path="/PhpForum" element={<PhpForum />} />
      </Routes>
    </>
  );
};
export default App;
