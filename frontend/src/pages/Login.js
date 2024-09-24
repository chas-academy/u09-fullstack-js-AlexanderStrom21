import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section class="w-full flex justify-center text-white">
        <div class="bg-cyan-950 p-2 m-6 rounded-lg w-3/4 justify-center">
          <h1 class="flex justify-center">Login</h1>
          <div class="flex justify-center">
            <form>
              <label for="email">Email:</label> <br></br>
              <input
                class="bg-gray-500 p-2 rounded-lg"
                type="text"
                id="email"
                name="email"
                value="alex@alex.alex"
              ></input>
              <br></br>
              <label for="password">Last name:</label> <br></br>
              <input
                class="bg-gray-500 p-2 rounded-lg"
                type="text"
                id="password"
                name="password"
                value="password123"
              ></input>
              <br></br>
              <li class="flex justify-center p-4 list-none underline">
                <NavLink to="/Register">Not registered?</NavLink>
              </li>
              <div class="flex justify-center">
                <input
                  class="flex bg-gray-500 p-2 rounded-lg mt-3"
                  type="submit"
                  value="Login"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
