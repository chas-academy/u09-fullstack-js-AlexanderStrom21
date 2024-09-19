import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="bg-gray-400 text-black p-2 m-6">
        <h1 class="flex justify-center">Login</h1>
        <div class="flex justify-center">
          <form>
            <label for="email">Email:</label> <br></br>
            <input
              class="bg-gray-500 text-black p-2 rounded-lg"
              type="text"
              id="email"
              name="email"
              value="alex@alex.alex"
            ></input>{" "}
            <br></br>
            <label for="password">Last name:</label> <br></br>
            <input
              class="bg-gray-500 text-black p-2 rounded-lg"
              type="text"
              id="password"
              name="password"
              value="password123"
            ></input>{" "}
            <br></br>
            <li class="p-4 ">
              <NavLink to="/Register">Not registered?</NavLink>
            </li>
            <input
              class="flex bg-gray-500 text-black p-2 rounded-lg mt-3"
              type="submit"
              value="Login"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
