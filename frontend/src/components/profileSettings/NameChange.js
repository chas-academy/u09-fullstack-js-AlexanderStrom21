import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import useAuthToken from "../../hooks/authHooks/useAuthToken";
import useFetchProfile from "../../hooks/userHooks/useFetchProfile";
import useForm from "../../hooks/form/useForm";

const UpdateProfile = () => {
  const { user, loading, error } = useFetchProfile();
  const { getToken } = useAuthToken();
  const navigate = useNavigate();

  const { formData, handleChange, setFormData, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    async (formData) => {
      const token = getToken();
      const result = await authService.updateUser(formData, token);
      if (result.success) {
        alert(result.message);
        navigate("/profile");
      } else {
        alert(result.message);
      }
    }
  );

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        password: "",
      });
    }
  }, [user, setFormData]);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-background text-dark w-full max-w-md mx-auto text-center mt-8 rounded-lg p-6 shadow-md">
      <h1 className="text-3xl font-bold mb-6">Update Your User Information</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-info transition duration-200"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-info transition duration-200"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-info text-white py-2 px-4 rounded-lg hover:bg-infohover transition duration-300"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
