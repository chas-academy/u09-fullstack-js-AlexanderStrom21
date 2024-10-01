import { useEffect, useState } from "react";
import CreateThread from "./CreateThread";
import ThreadList from "./ThreadList";

const Forum = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If there's a token, assume the user is logged in
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <h1>Forum</h1>

      <section className="flex justify-evenly ">
        <div className="flex m-5 flex-wrap justify-center w-screen h-screen">
          <div className="bg-cyan-950 m-5 p-4 text-white w-3/4 h-3/6 rounded-lg">
            <h1 className="flex justify-center p-5">Posts</h1>
            {isLoggedIn ? <CreateThread /> : <ThreadList />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Forum;
