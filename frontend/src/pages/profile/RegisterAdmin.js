import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/register-admin", // Ensure this URL is correct
        formData,
        {
          withCredentials: true, // Important for sending cookies
        }
      );

      // Successful registration response
      alert(response.data.message); // Show success message
      navigate("/login"); // Navigate to login page
    } catch (err) {
      // Improved error handling
      if (err.response) {
        // If there's a response from the server
        alert(
          err.response.data.error || "An error occurred during registration"
        );
      } else if (err.request) {
        // If the request was made but no response was received
        console.error("Error during registration:", err.request);
        alert("Registration failed. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error during registration:", err.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="w-full flex justify-center text-white">
      <div className="flex bg-cyan-950 p-2 m-6 rounded-lg w-3/4 justify-center">
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col grid justify-items-center w-full text-black"
          >
            <input
              className="flex m-2 w-2/4"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              className="flex m-2 w-2/4"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              className="flex m-2 w-2/4"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <div className="flex bg-gray-500 p-2 rounded-lg mt-3">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterAdmin;
