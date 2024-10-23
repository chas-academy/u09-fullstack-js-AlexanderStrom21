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
    <section className="bg-background w-3/4 mx-auto rounded-lg pt-10">
      <div className="bg-primary text-text w-2/4 mx-auto text-center rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">
          {thread.author}: Comments
        </h1>
        <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
          <div
            className="bg-primary m-2 w-3/4 p-4 pt-2 rounded-lg"
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
      {commentsLoading && <p>Loading comments...</p>}
      {commentsError && <p>Error fetching comments: {commentsError}</p>}
      <div className="bg:background  text-text w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">Comments:</h1>
        <div className="space-y-4 text-dark flex flex-col items-center pb-5">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-primary m-2 w-3/4 p-4 pt-2 rounded-lg"
            >
              <strong className="flex justify-self-start py-4">
                {comment.author}
              </strong>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <CreateThreadComment threadId={threadId} />
    </section>
  );
};

export default CommentPage;
