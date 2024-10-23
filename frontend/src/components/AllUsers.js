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
        `https://node-mongodb-api-4lo4.onrender.com/users/${userId}`,
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
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="bg-background text-white w-3/4 mx-auto text-center mt-8 rounded-lg pb-4">
        <h1 className="text-3xl font-bold pt-5 mb-6">All Users</h1>
        <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
          {data.map((user) => (
            <li
              className="bg-secondary m-2 w-full p-4 rounded-lg flex justify-between items-center mr-1"
              key={user._id}
            >
              <span>{user.username}</span>
              <button
                className="p-3 text-center bg-warning text-text rounded hover:bg-error"
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
