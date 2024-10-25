import { useEffect, useState } from "react";
import UseFetchThreads from "../threadHooks/UseThreads";
import useFetchProfile from "../userHooks/useFetchProfile";

const useFetchCommentsByAuthorId = () => {
  const { threads, loading, error } = UseFetchThreads();
  const { user } = useFetchProfile();
  const [userThreadComments, setUserThreadComments] = useState([]);
  const [userCommentsAndAuthorMatch, setUserCommentsAndAuthorMatch] =
    useState(false);
  const username = user?.username;

  useEffect(() => {
    if (threads && threads.length > 0) {
      if (user?.isAdmin) {
        const allComments = threads.flatMap((thread) =>
          thread.comments.map((comment) => ({
            ...comment,
            threadId: thread._id,
          }))
        );
        setUserThreadComments(allComments);
        setUserCommentsAndAuthorMatch(allComments.length > 0);
      } else {
        const filteredComments = threads.flatMap((thread) =>
          thread.comments
            .filter((comment) => comment.author === username)
            .map((comment) => ({ ...comment, threadId: thread._id }))
        );
        setUserThreadComments(filteredComments);
        setUserCommentsAndAuthorMatch(filteredComments.length > 0);
      }
    }
  }, [threads, username, user]);

  return { userCommentsAndAuthorMatch, userThreadComments, loading, error };
};

export default useFetchCommentsByAuthorId;
