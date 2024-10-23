import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/profile/Login";
import Register from "./pages/profile/Register";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/profile/Settings";
import DashBoard from "./pages/profile/DashBoard";
import "./index.css";
import Home from "./pages/Home";
import CPlus from "./pages/homePages/CPlus";
import CSharp from "./pages/homePages/CSharp";
import Java from "./pages/homePages/Java";
import JavaScript from "./pages/homePages/JavaScript";
import Php from "./pages/homePages/Php";
import CPlusForum from "./pages/forum/CPlusForum";
import CSharpForum from "./pages/forum/CSharpForum";
import JavaForum from "./pages/forum/JavaForum";
import JavaScriptForum from "./pages/forum/JavaScriptForum";
import PhpForum from "./pages/forum/Phpforum";
import Logout from "./pages/profile/Logout";
import RegisterAdmin from "./pages/profile/RegisterAdmin";
import AllUsers from "./components/AllUsers";
import ThreadListDelete from "./components/Threads/ThreadListDelete";
import CommentPage from "./pages/forum/CommentPage";

const App = () => {
  return (
    <>
      <div className="bg-main-gradient h-screen w-screen font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/ThreadListDelete" element={<ThreadListDelete />} />
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
          <Route path="/commentPage/:threadId" element={<CommentPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
