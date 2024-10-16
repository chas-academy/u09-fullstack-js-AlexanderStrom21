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
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">All Users</h1>
        <ul className="space-y-4 text-black flex flex-col items-center pb-5">
          {data.map((user) => (
            <li
              className="bg-gray-100 m-2 w-2/4 p-4 rounded-lg flex justify-between items-center"
              key={user._id}
            >
              <span>{user.username}</span>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllUsers;
