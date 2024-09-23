import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileLogo from "../assets/ProfileLogo.svg";

function Dropdown() {
  const navigate = useNavigate();

  // Define the routes
  const NavLogin = "/Login";
  const NavRegister = "/Register";

  // useState for selectedValue
  const [selectedValue, setSelectedValue] = useState("");

  // Handle dropdown change
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Programmatically navigate to the selected route
    if (value) {
      navigate(value);
    }
  };

  function ShowDissapear(value) {
    const show = document.getElementById("myOption");
    if (value === NavLogin || NavRegister) {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
  }
  return (
    <button onClick={ShowDissapear(value)}>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">adsasd</option>
        <option value={NavLogin}>Login</option>
        <option value={NavRegister}>Register</option>
      </select>
    </button>
  );
}

export default Dropdown;
