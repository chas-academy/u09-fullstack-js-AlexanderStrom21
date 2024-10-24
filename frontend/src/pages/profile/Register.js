import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
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
    <div className="flex justify-center w-full px-2">
      <div className="bg-background w-full max-w-2xl text-text text-center mt-8 rounded-lg p-6 shadow-lg">
        <h1 className="text-xl text-white font-bold mb-4">Register a user</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 items-center flex flex-col lg:max-w-screen-lg"
        >
          <input
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info "
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            aria-label="Username"
          />
          <input
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info "
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            className="flex p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info "
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            aria-label="Password"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-info text-white py-2 px-4 rounded-lg hover:bg-infohover transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
