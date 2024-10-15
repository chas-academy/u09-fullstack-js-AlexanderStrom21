import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null); // Initialize user state as null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          credentials: "include", // Ensure cookies are sent
        });

        if (response.ok) {
          const data = await response.json(); // Parse JSON response
          setUser(data); // Set user state with fetched data
        } else {
          alert("Could not fetch profile");
          console.error("Profile fetch error:", await response.json()); // Log the error response
        }
      } catch (err) {
        console.error("Error fetching profile:", err); // Log any errors
      }
    };

    fetchUser(); // Fetch user data on component mount
  }, []); // Empty dependency array so the effect only runs once

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.isAdmin ? "Admin" : "User"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
