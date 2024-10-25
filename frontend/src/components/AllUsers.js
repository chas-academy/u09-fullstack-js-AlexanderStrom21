import { useState, useEffect } from "react";
import useFetchUsers from "../hooks/httpMethodHooks/useFetchUsers";
import UserItem from "./UserItem";
import useDeleteUser from "../hooks/authHooks/useDeleteUser";

const AllUsers = () => {
  const {
    data: initialData,
    loading,
    error,
  } = useFetchUsers("https://node-mongodb-api-4lo4.onrender.com/allUsers");
  const [users, setUsers] = useState([]);
  const { handleDelete, deleting } = useDeleteUser(setUsers);

  // Sync initialData with users state once the data is fetched
  useEffect(() => {
    if (initialData) {
      setUsers(initialData);
    }
  }, [initialData]);

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
        {users.length > 0 ? (
          users.map((user) => (
            <UserItem key={user._id} user={user} handleDelete={handleDelete} />
          ))
        ) : (
          <p>No users available.</p>
        )}
      </ul>
    </div>
  );
};

export default AllUsers;
