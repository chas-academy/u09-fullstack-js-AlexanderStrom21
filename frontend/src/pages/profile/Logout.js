const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include", // Include cookies for the logout request
      });

      if (response.ok) {
        // Remove the token from localStorage
        localStorage.removeItem("token");

        // Optionally, you can use window.location.reload() to reload the page
        // to update the NavBar state, or redirect to the login page
        alert("Logout successful");
        window.location.href = "/login"; // Redirect to login page after logout
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <button
      className="block w-full px-4 py-2 text-left hover:bg-gray-200"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
