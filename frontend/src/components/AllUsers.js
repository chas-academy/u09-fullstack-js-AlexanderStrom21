import { useState } from "react";
import UseFetchUsers from "../hooks/UseFetchUsers";
import axios from "axios";

const AllUsers = () => {
  const { data, loading, error } = UseFetchUsers(
    "http://localhost:5000/allUsers"
  );

  const [users, setUsers] = useState(data); // Local state to manage users list

  const handleDelete = async (userId) => {
    try {
      // Make a DELETE request to the backend
      const response = await axios.delete(
        `http://localhost:5000/users/${userId}`,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );

      if (response.status === 200) {
        // Show success message
        alert(response.data.message);

        // Update the users list locally by removing the deleted user
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers); // Update the local state with remaining users
      } else {
        alert("Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Error deleting user.");
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-full flex justify-center text-white">
      <div className="flex bg-cyan-950 p-2 m-6 rounded-lg w-3/4 justify-center">
        <h1 className="flex justify-center ">All Users</h1>
        <ul>
          {data.map((user) => (
            <li key={user._id}>
              {user.username}
              <button
                className="flex bg-gray-500 p-2 rounded-lg mt-3"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUsers;
