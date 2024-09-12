import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import './index.css';



const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  );
};
export default App;