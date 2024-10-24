import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://node-mongodb-api-4lo4.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        navigate("/profile");
        window.location.reload();
      } else {
        alert(data.error || data.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="flex justify-center w-full px-2">
      <div className="bg-background w-full max-w-2xl text-text text-center mt-8 rounded-lg p-6 shadow-lg ">
        <h1 className="text-xl text-white font-bold mb-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 overflow-y-auto flex flex-col items-center"
        >
          <input
            className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
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
              className="bg-warning text-white py-2 px-4 rounded-lg hover:bg-error transition duration-300 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
