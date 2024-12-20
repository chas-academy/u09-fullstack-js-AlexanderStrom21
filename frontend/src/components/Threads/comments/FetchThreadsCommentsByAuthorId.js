import { useEffect, useState } from "react";
import axios from "axios";
import UseFetchThreads from "../../../hooks/threadHooks/UseThreads";
import useFetchThreadsByAuthorId from "../../../hooks/threadHooks/FetchThreadsByAuthorId";
import useFetchCommentsByAuthorId from "../../../hooks/commentHooks/UseFetchCommentsByAuthorId";
import useThreadListWithDelete from "../../../hooks/threadHooks/DeleteThread";
import useCommentDelete from "../../../hooks/commentHooks/DeleteComment";
import { useAuth } from "../../../hooks/authHooks/UseAuth";
import useFetchProfile from "../../../hooks/userHooks/useFetchProfile";

const FetchThreadsAndComments = () => {
  const isAuthenticated = useAuth();
  const { userAndAuthorMatch, userThreads } = useFetchThreadsByAuthorId();
  const { userCommentsAndAuthorMatch, userThreadComments } =
    useFetchCommentsByAuthorId();
  const { loading: threadsLoading, error: threadsError } = UseFetchThreads();
  const { handleDelete: threadDelete } = useThreadListWithDelete();
  const { handleDelete: commentDelete } = useCommentDelete();
  const [commentsMap, setCommentsMap] = useState({});
  const { user } = useFetchProfile();

  useEffect(() => {
    const fetchCommentsForThreads = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      if (!token) {
        return;
      }
      if (userThreads.length > 0) {
        const commentsPromises = userThreads.map(async (thread) => {
          try {
            const response = await axios.get(
              `https://node-mongodb-api-4lo4.onrender.com/thread/${thread._id}/comments`
            );
            return { threadId: thread._id, comments: response.data };
          } catch (error) {
            console.error(
              `Error fetching comments for thread ${thread._id}:`,
              error
            );
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
  }, [userThreads, commentsMap]);

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

  if (!isAuthenticated) return null;

  if (threadsLoading) {
    return <p>Loading threads...</p>;
  }

  if (threadsError) {
    return <p>Error loading threads: {threadsError}</p>;
  }

  return (
    <div>
      {userAndAuthorMatch || userCommentsAndAuthorMatch ? (
        <div className="bg-background text-text w-6/6 mx-auto text-center mt-8 pt-5 pb-5 rounded-lg">
          {user ? (
            user.isAdmin ? (
              <h2 className="text-2xl font-bold mb-4">All Threads</h2>
            ) : (
              <h2 className="text-2xl font-bold mb-4">Your Threads</h2>
            )
          ) : (
            <p>Profile Loading...</p>
          )}
          {userThreads.length > 0 ? (
            userThreads.map((thread) => (
              <div key={thread._id} className="m-4 p-6 rounded-lg bg-primary">
                <h3 className="text-xl font-bold">{thread.title}</h3>
                <p className="mt-2">{thread.content}</p>
                <button
                  className="px-4 py-2 bg-warning text-text rounded hover:bg-error"
                  onClick={() => threadDelete(thread._id)}
                >
                  Delete Thread
                </button>
                <p className="text-sm mt-4 text-text">
                  Author: {thread.author} | Date:{" "}
                  {new Date(thread.date).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>You have no threads.</p>
          )}

          <h2 className="text-2xl font-bold mb-4">Your Comments</h2>
          {userThreadComments.length > 0 ? (
            userThreadComments.map((comment) => (
              <div key={comment._id} className="bg-primary m-4 p-4 rounded-lg">
                <p>
                  <strong>Comment:</strong> {comment.comment}
                </p>
                <button
                  className="px-4 py-2 bg-warning text-text rounded hover:bg-error"
                  onClick={() =>
                    handleCommentDelete(comment.threadId, comment._id)
                  }
                >
                  Delete Comment
                </button>
                <p className="text-sm text-text">
                  Thread: {comment.threadTitle} | Date:{" "}
                  {new Date(comment.date).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>You have no comments.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchThreadsAndComments;
