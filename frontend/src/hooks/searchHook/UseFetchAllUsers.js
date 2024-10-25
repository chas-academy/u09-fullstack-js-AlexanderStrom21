import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import useFetchProfile from "../userHooks/useFetchProfile";

const UseFetchAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://node-mongodb-api-4lo4.onrender.com/allUsers"
        );
        setAllUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const { user } = useFetchProfile();
  const username = user?.username;
  const filterUsers = useCallback(
    (searchTerm) => {
      if (searchTerm.length < 4) {
        return [];
      }

      return allUsers.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
          user.username !== username
      );
    },
    [allUsers, username]
  );

  return { allUsers, filterUsers, loading, error };
};

export default UseFetchAllUsers;
