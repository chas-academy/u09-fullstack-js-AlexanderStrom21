import { useEffect, useState } from "react";

const UseFetchProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      try {
        const response = await fetch(
          "https://node-mongodb-api-4lo4.onrender.com/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send the token in the header
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else if (response.status === 403) {
          setError("Unauthorized access. Token may be missing or invalid.");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Could not fetch profile");
        }
      } catch (err) {
        setError("Error fetching profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default UseFetchProfile;
