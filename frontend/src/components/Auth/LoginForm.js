import useForm from "../../hooks/form/useForm";

const LoginForm = ({ onSubmit }) => {
  const { formData, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    onSubmit
  );
  return (
    <div className="flex justify-center w-full px-2">
      <div className="bg-background w-full max-w-2xl text-text text-center mt-8 rounded-lg p-6 shadow-lg">
        <h1 className="text-xl text-white font-bold mb-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="text-dark space-y-4 overflow-y-auto flex flex-col items-center"
        >
          <input
            className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            className="flex m-2 p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-info"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-label="Password"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-warning text-white py-2 px-4 rounded-lg hover:bg-error transition duration-300 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
