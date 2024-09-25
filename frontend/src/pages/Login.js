import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        navigate("/profile");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <section class="w-full flex justify-center text-white">
      <div class="flex bg-cyan-950 p-2 m-6 rounded-lg w-3/4 justify-center">
        <div class="w-full">
          <form
            onSubmit={handleSubmit}
            class="flex flex-col grid justify-items-center w-full text-black"
          >
            <input
              class="flex m-2 w-2/4"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              class="flex m-2 w-2/4"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div class="flex bg-gray-500 p-2 rounded-lg mt-3">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
