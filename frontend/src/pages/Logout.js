const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include", // Include cookies for the logout request
      });

      if (response.ok) {
        alert("Logout successful");
        window.location.href = "/login"; // Optionally redirect to login page
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
