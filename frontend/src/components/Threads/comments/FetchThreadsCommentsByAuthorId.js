import { useEffect, useState } from "react";
import axios from "axios";
import UseFetchThreads from "../../../hooks/threadHooks/UseThreads";
import useFetchThreadsByAuthorId from "../../../hooks/threadHooks/FetchThreadsByAuthorId";
import useFetchCommentsByAuthorId from "../../../hooks/commentHooks/UseFetchCommentsByAuthorId";
import useAuth from "../../../hooks/userHooks/UseAuth";
import useThreadListWithDelete from "../../../hooks/threadHooks/DeleteThread";
import useCommentDelete from "../../../hooks/commentHooks/DeleteComment";

const FetchThreadsAndComments = () => {
  const isLoggedIn = useAuth();
  const { userAndAuthorMatch, userThreads } = useFetchThreadsByAuthorId();
  const { userCommentsAndAuthorMatch, userThreadComments } =
    useFetchCommentsByAuthorId();
  const { loading: threadsLoading, error: threadsError } = UseFetchThreads();
  const [commentsMap, setCommentsMap] = useState({});
  const { handleDelete: threadDelete } = useThreadListWithDelete();
  const { handleDelete: commentDelete } = useCommentDelete();

  useEffect(() => {
    const fetchCommentsForThreads = async () => {
      if (userThreads.length > 0) {
        const commentsPromises = userThreads.map(async (thread) => {
          try {
            const response = await axios.get(
              `http://localhost:5000/thread/${thread._id}/comments`
            );
            return { threadId: thread._id, comments: response.data };
          } catch (error) {
            return { threadId: thread._id, comments: [] };
          }
        });

        const commentsResults = await Promise.all(commentsPromises);
        const newCommentsMap = {};
        commentsResults.forEach((result) => {
          newCommentsMap[result.threadId] = result.comments;
        });
        setCommentsMap(newCommentsMap);
      }
    };

    fetchCommentsForThreads();
  }, [userThreads]);

  const handleCommentDelete = async (threadId, commentId) => {
    if (!threadId || !commentId) {
      console.error("Thread ID or Comment ID is missing.");
      return;
    }
    try {
      await commentDelete(threadId, commentId);
      setCommentsMap((prevCommentsMap) => ({
        ...prevCommentsMap,
        [threadId]: prevCommentsMap[threadId].filter(
          (comment) => comment._id !== commentId
        ),
      }));
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  if (!isLoggedIn) return null;

  if (threadsLoading) {
    return <p>Loading threads...</p>;
  }

  if (threadsError) {
    return <p>Error loading threads: {threadsError}</p>;
  }

  return (
    <div>
      {userAndAuthorMatch || userCommentsAndAuthorMatch ? (
        <div className="bg-cyan-900 text-white w-6/6 mx-auto text-center mt-8 pt-5 pb-5 rounded-lg">
          {userThreads.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Your Threads</h2>
              {userThreads.map((thread) => (
                <div
                  key={thread._id}
                  className="m-4 p-6 rounded-lg bg-cyan-950"
                >
                  <h3 className="text-xl font-bold">{thread.title}</h3>
                  <p className="mt-2">{thread.content}</p>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => threadDelete(thread._id)}
                  >
                    Delete Thread
                  </button>
                  <p className="text-sm mt-4">
                    Author: {thread.author} | Date:{" "}
                    {new Date(thread.date).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}

          {userThreadComments.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Your Comments</h2>
              {userThreadComments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-cyan-950 m-4 p-4 rounded-lg"
                >
                  <p>
                    <strong>Comment:</strong> {comment.comment}
                  </p>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => {
                      if (comment.threadId) {
                        handleCommentDelete(comment.threadId, comment._id);
                      } else {
                        console.error("Thread ID is missing for this comment");
                      }
                    }}
                  >
                    Delete Comment
                  </button>
                  <p className="text-sm text-white">
                    Thread: {comment.threadTitle} | Date:{" "}
                    {new Date(comment.date).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}

          {userThreads.length === 0 && userThreadComments.length === 0 && (
            <p className="mt-10 text-white">You have no threads or comments.</p>
          )}
        </div>
      ) : (
        <p>Nothing matches</p>
      )}
    </div>
  );
};

export default FetchThreadsAndComments;
