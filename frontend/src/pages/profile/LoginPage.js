import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import LoginForm from "../../components/Auth/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const result = await authService.login(formData);
    if (result.success) {
      alert("Login successful");
      navigate("/profile");
      window.location.reload();
    } else {
      alert(result.message);
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
