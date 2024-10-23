import { useState } from "react";
import axios from "axios";

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://node-mongodb-api-4lo4.onrender.com/register-admin",
        formData,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);
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
    <section className="w-full flex justify-center text-white">
      <h1 className="text-3xl font-bold pt-5 mb-6">Register Admin</h1>
      <div className="flex bg-primary p-2 m-6 rounded-lg w-3/4 justify-center">
        <div className="w-full">
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
            <div className="flex bg-info p-2 rounded-lg mt-3 hover:bg-secondaryhover">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterAdmin;
