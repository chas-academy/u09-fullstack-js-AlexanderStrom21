import axios from "axios";
import useAuthToken from "../authHooks/useAuthToken";
import { useState } from "react";

const useDeleteUser = (setUsers) => {
  const { getToken } = useAuthToken();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async (userId) => {
    const token = getToken();
    setDeleting(true);

    try {
      const response = await axios.delete(
        `https://node-mongodb-api-4lo4.onrender.com/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert(response.data.message);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } else {
        alert("Failed to delete user.");
      }
    } catch (err) {
      alert("Error deleting user.");
    }
  };

  return { handleDelete, deleting };
};

export default useDeleteUser;
