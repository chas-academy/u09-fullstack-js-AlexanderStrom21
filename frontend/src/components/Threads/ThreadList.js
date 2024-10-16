import { NavLink } from "react-router-dom";
import UseFetchThreads from "../hooks/UseThreads";

const ThreadList = () => {
  const { threads, loading, error } = UseFetchThreads();

  if (loading) {
    return <p>Loading threads...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Forum Threads</h1>
      {threads.map((thread) => (
        <div key={thread._id} className="border-b-2 pb-4 mb-4">
          <h2 className="text-2xl font-semibold">{thread.title}</h2>
          <p>{thread.content}</p>
          <p>
            <strong>Author:</strong> {thread.author}
          </p>
          <p>
            <strong>Date:</strong> {new Date(thread.date).toLocaleString()}
          </p>
          <NavLink to={`/ThreadComment/${thread._id}`}>
            <div className="flex bg-gray-500 p-2 rounded-lg mt-3">
              <button type="submit" className="text-white">
                Comment
              </button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
