const Logout = () => {
  const handleLogout = async () => {
    try {
      await fetch("https://node-mongodb-api-4lo4.onrender.com/logout", {
        method: "POST",
        Credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
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
