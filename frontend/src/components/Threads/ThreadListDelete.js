import { useState } from "react";
import axios from "axios";
import UseFetchThreads from "../../hooks/threadHooks/UseThreads";

const ThreadListDelete = () => {
  const { threads, loading, error } = UseFetchThreads();

  const [fetchthread, setFetchThread] = useState(threads);
  const handleDelete = async (threadId) => {
    try {
      const response = await axios.delete(
        `https://node-mongodb-api-4lo4.onrender.com/thread/${threadId}`,
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
      <div className="bg-background text-text w-2/4 mx-auto text-center mt-8 rounded-lg pb-4">
        <h1 className="text-3xl font-bold pt-5 mb-6">Forum Threads</h1>
        <div className="flex flex-col items-center">
          {threads.map((thread) => (
            <div
              className="bg-primary m-2 w-3/4 p-4 rounded-lg flex flex-col items-start"
              key={thread._id}
            >
              <strong className="self-start">{thread.author}</strong>
              <h2 className="text-lg font-bold">{thread.title}</h2>
              <p className="py-4">{thread.content}</p>
              <div className="flex justify-between w-full">
                <small className="self-end text-text">
                  Date:{" "}
                  {thread.date
                    ? new Date(thread.date).toLocaleString()
                    : "No Date Available"}
                </small>
                <button
                  className="px-4 py-2 bg-warning text-text rounded hover:bg-error"
                  onClick={() => handleDelete(thread._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ThreadListDelete;
