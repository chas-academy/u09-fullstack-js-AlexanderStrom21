import { useState } from "react";
import UseFetchThreads from "../../hooks/threadHooks/UseThreads";
import axios from "axios";

const ThreadListDelete = () => {
  const { threads, loading, error } = UseFetchThreads();

  const [fetchthread, setFetchThread] = useState(threads);
  const handleDelete = async (threadId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/thread/${threadId}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert(response.data.message);
        const updatedThreads = fetchthread.filter(
          (thread) => thread._id !== threadId
        );
        setFetchThread(updatedThreads);
        window.location.reload();
      } else {
        alert("Failed to delete thread");
      }
    } catch (err) {
      console.error("Error deleting thread:", err);
      alert("Error deleting thread.");
    }
  };

  if (loading) {
    return <p>Loading threads...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">Forum Threads</h1>
        <ul className="space-y-4 text-black flex flex-col items-center pb-5">
          {threads.map((thread) => {
            return (
              <div
                className="bg-gray-100 m-2 w-3/4 p-4 pt-2 rounded-lg"
                key={thread._id}
              >
                <strong className="flex justify-self-start">
                  {thread.author}
                </strong>
                <h2 className="text-lg font-bold">{thread.title}</h2>
                <p className="flex justify-self-start py-4">{thread.content}</p>
                <div className="flex justify-between w-full ">
                  <small className="self-end">
                    Date:
                    {thread.date
                      ? new Date(thread.date).toLocaleString()
                      : "No Date Available"}
                  </small>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(thread._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ThreadListDelete;
