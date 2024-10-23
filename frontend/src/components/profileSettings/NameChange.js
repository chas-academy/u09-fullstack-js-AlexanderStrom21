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
    <>
      {user ? (
        <div className="bg-primary text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
          <h1 className="text-3xl font-bold pt-5 mb-6">
            Update Your user information
          </h1>
          <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="text-dark"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  className="text-dark"
                  placeholder="Password"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex bg-info p-2 rounded-lg mt-3 text-white hover:bg-secondaryhover">
                <button type="submit">Update User</button>
              </div>
            </form>
          </ul>
        </div>
      ) : (
        <p>Cant fetch your profile.. Try logout and login!</p>
      )}
    </>
  );
};

export default ProfileNameChange;
