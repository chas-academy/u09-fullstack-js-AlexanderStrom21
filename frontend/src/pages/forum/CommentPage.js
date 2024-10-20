import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreateThreadComment from "../../components/Threads/comments/CreateThreadComment";

const CommentPage = () => {
  const { threadId } = useParams();
  const [threads, setThreads] = useState([]);
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/threads`);
        setThreads(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching threads data");
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  useEffect(() => {
    if (threads.length > 0) {
      const foundThread = threads.find((thread) => thread._id === threadId);
      setThread(foundThread);
    }
  }, [threads, threadId]);

  if (loading) {
    return <p>Loading thread...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!thread) {
    return <p>No thread found with ID: {threadId}</p>;
  }

  return (
    <div>
      <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">
          {" "}
          {thread.author}: Comments
        </h1>
        <ul className="space-y-4 text-black flex flex-col items-center pb-5">
          <div
            className="bg-gray-100 m-2 w-3/4 p-4 pt-2 rounded-lg"
            key={thread._id}
          >
            <strong className="flex justify-self-start">{thread.author}</strong>
            <h2 className="text-lg font-bold">{thread.title}</h2>
            <p className="flex justify-self-start py-4">{thread.content}</p>
            <div className="flex justify-between w-full ">
              <small className="self-end">
                Date:
                {thread.date
                  ? new Date(thread.date).toLocaleString()
                  : "No Date Available"}
              </small>
            </div>
          </div>
        </ul>
      </div>

      <CreateThreadComment threadId={threadId} />
    </div>
  );
};

export default CommentPage;
