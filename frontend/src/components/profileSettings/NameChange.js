import { useEffect, useState } from "react";
import UseFetchProfile from "../../hooks/userHooks/FetchProfile";
import axios from "axios";

const ProfileNameChange = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, loading, error } = UseFetchProfile();

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `https://node-mongodb-api-4lo4.onrender.com/profile/`,
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      window.location.reload();
    } catch (err) {
      if (err.response) {
        alert(
          err.response.data.error || "An error occurred during updating user"
        );
      } else if (err.request) {
        console.error("Error during updating:", err.request);
        alert("updating failed. Please try again later.");
      } else {
        console.error("Error during updating", err.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-background text-dark w-full max-w-md mx-auto text-center mt-8 rounded-lg p-6 shadow-md">
      <h1 className="text-3xl font-bold mb-6">Update Your User Information</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-info transition duration-200"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-info transition duration-200"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-info text-white py-2 px-4 rounded-lg hover:bg-infohover transition duration-300"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileNameChange;
