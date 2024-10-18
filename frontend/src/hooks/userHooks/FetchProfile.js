import { useEffect, useState } from "react";

const UseFetchProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true); // Set loading state to true
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          credentials: "include", // Ensure cookies are sent
        });

        if (response.ok) {
          const data = await response.json(); // Parse JSON response
          setUser(data); // Set user state with fetched data
        } else {
          const errorData = await response.json(); // Parse the error response
          setError(errorData.message || "Could not fetch profile");
          console.error("Profile fetch error:", errorData);
        }
      } catch (err) {
        setError("Error fetching profile");
        console.error("Error fetching profile:", err); // Log any errors
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchUser();
  }, []); // Dependency array empty to run effect only once on mount

  return { user, loading, error }; // Return user, loading state, and error
};

export default UseFetchProfile;
