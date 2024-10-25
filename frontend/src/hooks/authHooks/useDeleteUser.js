import axios from "axios";
import useAuthToken from "../authHooks/useAuthToken";

const useDeleteUser = (setUsers) => {
  const { getToken } = useAuthToken();

  const handleDelete = async (userId) => {
    const token = getToken(); // Retrieve token from localStorage or context
    console.log("Token used for deletion:", token); // Debugging log

    try {
      const response = await axios.delete(
        `https://node-mongodb-api-4lo4.onrender.com/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is passed correctly
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
      console.error("Error deleting user:", err); // Log the error
      alert("Error deleting user.");
    }
  };

  return { handleDelete };
};

export default useDeleteUser;
