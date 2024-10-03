import { useEffect, useState } from "react";
import CreateThread from "./CreateThread";
import ThreadList from "./ThreadList";
import axios from "axios";

const Forum = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [threads, setThreads] = useState([]);

  const fetchThreads = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/threads");
      setThreads(response.data);
    } catch (error) {
      console.error("Error fetching threads:", error);
    }
  };

  fetchThreads();
  // Check if user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If there's a token, assume the user is logged in
      fetchThreads();
    } else {
      setIsLoggedIn(false);
      fetchThreads();
    }
  }, []);

  if (isLoggedIn === true) {
    return (
      <>
        {threads.map((thread) => (
          <div key={thread._id}>
            <h1 className="flex justify-center p-5">Posts</h1>
            <section className="flex justify-evenly ">
              <div className="flex m-5 flex-wrap justify-center w-screen h-screen">
                <div className="bg-cyan-950 m-5 p-4 text-white w-3/4 h-3/6 rounded-lg">
                  <h2>{thread.title}</h2>
                  <p>{thread.content}</p>
                  <p>
                    <strong>Author:</strong> {thread.author}
                  </p>
                  <p classname="flex float-bottom-right">
                    <strong>Date:</strong>
                    {new Date(thread.date).toLocaleString()}
                  </p>
                </div>
              </div>
            </section>

            <CreateThread></CreateThread>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {threads.map((thread) => (
          <div key={thread._id}>
            <h1 className="flex justify-center p-5">Posts</h1>
            <section className="flex justify-evenly ">
              <div className="flex m-5 flex-wrap justify-center w-screen h-screen">
                <div className="bg-cyan-950 m-5 p-4 text-white w-3/4 h-3/6 rounded-lg">
                  <h1 className="flex justify-center pb-3">{thread.title}</h1>
                  <p className="flex justify-center">{thread.content}</p>
                  <p>
                    <strong>Author:</strong> {thread.author}
                  </p>
                  <p>
                    <strong>Date:</strong>
                    {new Date(thread.date).toLocaleString()}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </>
    );
  }
};

export default Forum;
