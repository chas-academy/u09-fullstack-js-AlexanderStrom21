const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("https://node-mongodb-api-4lo4.onrender.com/logout", {
        method: "POST",
        credentials: "include", 
      });

      if (response.ok) {
        localStorage.removeItem("token");

        alert("Logout successful");
        window.location.href = "/login"; 
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
