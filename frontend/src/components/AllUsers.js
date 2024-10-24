import { useState } from "react";
import axios from "axios";
import useFetchUsers from "../hooks/userHooks/UseFetchUsers";

const AllUsers = () => {
  const { data, loading, error } = useFetchUsers(
    "https://node-mongodb-api-4lo4.onrender.com/allUsers"
  );

  const [users, setUsers] = useState(data);
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `https://node-mongodb-api-4lo4.onrender.com/profile/${userId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert(response.data.message);

        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
        window.location.reload();
      } else {
        alert("Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Error deleting user.");
    }
  };

  if (loading) {
    return <p className="text-center text-text mt-4">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-error mt-4">Error: {error}</p>;
  }

  return (
    <div className="bg-background text-text w-full text-center mt-8 rounded-lg p-6 shadow-lg">
      <h1 className="text-xl font-bold pt-5 mb-4">All Users</h1>
      <ul className="space-y-4 h-fit overflow-y-auto">
        {data.map((user) => (
          <li
            className="bg-primary text-text p-4 rounded-lg flex justify-between items-center w-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mb-4"
            key={user._id}
          >
            <span className="text-base sm:text-lg md:text-xl font-semibold mb-2 break-all mr-4">
              {user.username}
            </span>
            <button
              className="bg-warning hover:bg-error text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-300 ease-in-out"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
