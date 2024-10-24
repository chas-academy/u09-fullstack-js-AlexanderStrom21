import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreateThreadComment from "../../components/Threads/comments/CreateThreadComment";
import UseFetchThreadComments from "../../hooks/commentHooks/UseFetchThreadComments";

const CommentPage = () => {
  const { threadId } = useParams();
  const [threads, setThreads] = useState([]);
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get(
          `https://node-mongodb-api-4lo4.onrender.com/threads`
        );
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
  const {
    comments,
    loading: commentsLoading,
    error: commentsError,
  } = UseFetchThreadComments(threadId);

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
    <section className="mt-10 w-full max-w-lg mx-auto lg:max-w-screen-lg px-2">
      {/* Thread Section */}
      <div className="bg-background text-text w-full text-center rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">{thread.author}: Comments</h1>
        <ul className="space-y-4">
          <div className="bg-primary p-4 rounded-lg shadow-md" key={thread._id}>
            <strong className="block text-left mb-2">{thread.author}</strong>
            <h2 className="text-lg font-bold mb-2">{thread.title}</h2>
            <p className="text-left mb-4">{thread.content}</p>
            <div className="flex text-sm text-text justify-end p-2">
              <small>
                Date:{" "}
                {thread.date
                  ? new Date(thread.date).toLocaleString()
                  : "No Date Available"}
              </small>
            </div>
          </div>
        </ul>
      </div>

      {/* Comments Loading/Error */}
      {commentsLoading && (
        <p className="text-center mt-4">Loading comments...</p>
      )}
      {commentsError && (
        <p className="text-center mt-4 text-red-500">
          Error fetching comments: {commentsError}
        </p>
      )}

      {/* Comments Section */}
      <div className="bg-background text-text w-full text-center rounded-lg p-6 mt-10">
        <h1 className="text-2xl font-bold mb-6">Comments:</h1>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-primary p-4 rounded-lg shadow-md"
            >
              <strong className="block text-left mb-2">{comment.author}</strong>
              <p className="text-left">{comment.comment}</p>
              <div className="flex text-sm text-text justify-end p-2">
                <small>
                  Date:{" "}
                  {thread.date
                    ? new Date(thread.date).toLocaleString()
                    : "No Date Available"}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CreateThreadComment threadId={threadId} />
    </section>
  );
};

export default CommentPage;
