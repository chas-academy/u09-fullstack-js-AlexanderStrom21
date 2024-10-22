import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (onSubmit) => {
    setFormData({ ...formData, [onSubmit.target.name]: onSubmit.target.value });
  };

  const handleSubmit = async (onSubmit) => {
    onSubmit.preventDefault();
    try {
      const response = await fetch("https://node-mongodb-api-4lo4.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

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
    <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
      <h1 className="text-3xl font-bold pt-5 mb-6">Login</h1>
      <ul className="space-y-4 text-black flex flex-col items-center pb-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col grid justify-items-center w-full text-black"
        >
          <input
            className="flex m-2 w-2/4"
            type="text"
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
            <button type="submit">Login</button>
          </div>
        </form>
      </ul>
    </div>
  );
};

export default Login;
