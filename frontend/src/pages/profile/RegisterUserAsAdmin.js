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
    <div className="bg-background text-text w-2/4 mx-auto text-center mt-8 rounded-lg">
      <h1 className="text-3xl font-bold pt-5 mb-6">Register a user</h1>
      <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col grid justify-items-center w-full text-dark"
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
          <div className="flex bg-info p-2 rounded-lg mt-3 hover:bg-primaryhover">
            <button type="submit">Register</button>
          </div>
        </form>
      </ul>
    </div>
  );
};

export default RegisterAUser;
