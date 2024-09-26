import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (onSubmit) => {
    setFormData({ ...formData, [onSubmit.target.name]: onSubmit.target.value });
  };

  const handleSubmit = async (onSubmit) => {
    onSubmit.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Ensure you save the token from the response
        alert("Login successful");
        navigate("/profile");
      } else {
        alert(data.error || data.message); // Show error message from the server
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <>
      <section className="w-full flex justify-center text-white">
        <div className="flex bg-cyan-950 p-2 m-6 rounded-lg w-3/4 justify-center">
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col grid justify-items-center w-full text-black"
            >
              <input
                className="flex m-2 w-2/4"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="flex m-2 w-2/4"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <div className="flex bg-gray-500 p-2 rounded-lg mt-3">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
