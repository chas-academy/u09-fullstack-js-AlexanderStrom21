import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/Auth/RegisterForm";
import { authService } from "../../services/AuthService";

const RegisterAUser = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    const result = await authService.register(formData);
    if (result.success) {
      alert(result.message);
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  return <RegisterForm onSubmit={handleRegister} />;
};

export default RegisterAUser;
