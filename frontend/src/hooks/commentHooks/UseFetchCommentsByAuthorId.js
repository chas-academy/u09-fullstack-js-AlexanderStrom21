import { useEffect, useState } from "react";
import UseFetchProfile from "../userHooks/FetchProfile";
import UseFetchThreads from "../threadHooks/UseThreads";

const useFetchCommentsByAuthorId = () => {
  const { threads, loading, error } = UseFetchThreads();
  const { user } = UseFetchProfile();
  const [userThreadComments, setUserThreadComments] = useState([]);
  const [userCommentsAndAuthorMatch, setUserCommentsAndAuthorMatch] =
    useState(false);
  const username = user?.username;

  useEffect(() => {
    if (threads && threads.length > 0 && username) {
      const filteredComments = threads.flatMap((thread) =>
        thread.comments.filter((comment) => comment.author === username)
      );
      setUserThreadComments(filteredComments);
      setUserCommentsAndAuthorMatch(filteredComments.length > 0);
    }
  }, [threads, username]);

  return { userCommentsAndAuthorMatch, userThreadComments, loading, error };
};

export default useFetchCommentsByAuthorId;
