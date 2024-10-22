import { useEffect, useState } from "react";

const UseFetchProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://node-mongodb-api-4lo4.onrender.com/profile",
          {
            method: "GET",
            credentials: "include", // Ensure cookies are sent
          }
        );
        console.log("Fetch response status:", response.status); // Log status for debugging

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else if (response.status === 403) {
          // Handle 403 specifically (token issue)
          setError("Unauthorized access. Token may be missing or invalid.");
          console.error("Profile fetch error: No token or invalid token");
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Could not fetch profile");
          console.error("Profile fetch error:", errorData);
        }
      } catch (err) {
        setError("Error fetching profile");
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default UseFetchProfile;
