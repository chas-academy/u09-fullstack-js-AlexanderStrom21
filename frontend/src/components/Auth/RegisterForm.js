import useForm from "../../hooks/form/useForm";

const RegisterForm = ({ onSubmit }) => {
  const { formData, handleChange, handleSubmit } = useForm(
    { username: "", email: "", password: "" },
    onSubmit
  );

  return (
    <div className="flex justify-center w-full px-2">
      <div className="bg-background w-full max-w-2xl text-text text-center mt-8 rounded-lg p-6 shadow-lg">
        <h1 className="text-xl text-white font-bold mb-4">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 overflow-y-auto flex flex-col items-center text-dark"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
