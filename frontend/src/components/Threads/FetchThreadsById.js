import { useEffect, useState } from "react";
import axios from "axios";
import GetThreadIdButton from "./comments/CommentNavigateButton";

const FetchThreadsById = ({ forumType }) => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get(
          `https://node-mongodb-api-4lo4.onrender.com/threads/${forumType}`
        );
        setThreads(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (forumType) {
      fetchThreads();
    }
  }, [forumType]);

  if (loading) {
    return <p>Loading threads...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-background text-text w-full max-w-lg mx-auto text-center mt-8 rounded-lg p-6 lg:max-w-screen-lg">
      <h1 className="text-2xl font-bold pt-5 mb-6">Threads: {forumType}</h1>
      <ul className="space-y-4">
        {threads.map((thread) => (
          <div
            className="bg-secondary p-4 rounded-lg shadow-md"
            key={thread._id}
          >
            <strong className="block text-left mb-2">{thread.author}</strong>
            <h2 className="text-lg font-bold mb-2">{thread.title}</h2>
            <p className="text-left mb-4">{thread.content}</p>
            <div className="flex justify-between items-center text-sm text-text">
              <span>
                Date:{" "}
                {thread.date
                  ? new Date(thread.date).toLocaleString()
                  : "No Date Available"}
              </span>
              <GetThreadIdButton threadId={thread._id} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchThreadsById;
