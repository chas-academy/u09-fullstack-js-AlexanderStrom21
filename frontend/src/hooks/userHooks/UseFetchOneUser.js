import axios from "axios";
import { useEffect, useState } from "react";

const UseFetchOneUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOneUser = async () => {
      try {
        if (!username) {
          throw new Error("Username is required");
        }

        const response = await axios.get(
          `https://node-mongodb-api-4lo4.onrender.com/users/${username}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error(
          "Error fetching user:",
          err.response?.data || err.message
        );
        setError(err.response?.data?.message || "Error fetching user data");
        setLoading(false);
      }
    };

    fetchOneUser();
  }, [username]);

  return { user, loading, error };
};

export default UseFetchOneUser;
