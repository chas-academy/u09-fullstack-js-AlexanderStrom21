import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/profile/LoginPage";
import RegisterPage from "./pages/profile/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
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
import RegisterAdmin from "./pages/profile/RegisterAdmin";
import AllUsers from "./components/AllUsers";
import ThreadListDelete from "./components/Threads/ThreadListDelete";
import CommentPage from "./pages/forum/CommentPage";
import HomeNav from "./components/HomeNav";
import UserSettings from "./pages/profile/UpdateProfile";

const navItems = [
  { name: "C++", path: "/CPlus", enabled: true },
  { name: "C#", path: "/CSharp", enabled: true },
  { name: "Java", path: "/Java", enabled: true },
  { name: "JavaScript", path: "/JavaScript", enabled: true },
  { name: "PHP", path: "/Php", enabled: true },
];
const App = () => {
  return (
    <>
      <div className="bg-main-gradient flex flex-col items-center h-screen w-screen sm:min-w-screen font-sans fixed overflow-y-auto">
        <NavBar />
        <HomeNav HomeNav={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
          <Route path="/UserSettings" element={<UserSettings />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Login" element={<LoginPage />} />
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
