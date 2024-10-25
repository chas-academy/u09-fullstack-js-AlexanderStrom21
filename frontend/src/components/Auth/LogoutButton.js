import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.log("Logout failed", error);
    }
  };
  return (
    <button
      className="block w-full px-4 py-2 text-left hover:bg-primaryhover rounded-lg text-text"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
export default LogoutButton;
