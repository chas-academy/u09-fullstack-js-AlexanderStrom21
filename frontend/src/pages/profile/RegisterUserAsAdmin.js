import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterAUser = () => {
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
        "https://node-mongodb-api-4lo4.onrender.com/register",
        formData,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);
      navigate("/login");
    } catch (err) {
      if (err.response) {
        alert(
          err.response.data.error || "An error occurred during registration"
        );
      } else if (err.request) {
        console.error("Error during registration:", err.request);
        alert("Registration failed. Please try again later.");
      } else {
        console.error("Error during registration:", err.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="bg-background w-full text-text text-center mt-8 rounded-lg p-6 shadow-lg">
      <h1 className="text-xl font-bold mb-4">Register a user</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 overflow-y-auto flex flex-col items-center"
      >
        <input
          className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-info text-white p-2 rounded-lg mt-3 hover:bg-infohover transition duration-300 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterAUser;
