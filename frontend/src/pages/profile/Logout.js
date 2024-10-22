import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://node-mongodb-api-4lo4.onrender.com/logout",
        {}, 
        { withCredentials: true } 
      );

      if (response.status === 200) {
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
