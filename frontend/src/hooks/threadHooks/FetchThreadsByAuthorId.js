import { useEffect, useState } from "react";
import UseFetchThreads from "./UseThreads";
import useFetchProfile from "../userHooks/useFetchProfile";

const useFetchThreadsByAuthorId = () => {
  const { threads } = UseFetchThreads();
  const { user } = useFetchProfile();
  const [userThreads, setUserThreads] = useState([]);
  const [userAndAuthorMatch, setUserAndAuthorMatch] = useState(false);
  const username = user?.username;

  useEffect(() => {
    if (threads && threads.length > 0) {
      if (user?.isAdmin) {
        setUserThreads(threads);
        setUserAndAuthorMatch(true);
      } else {
        const filteredThreads = threads.filter(
          (thread) => thread.author === username
        );
        setUserThreads(filteredThreads);
        setUserAndAuthorMatch(filteredThreads.length > 0);
      }
    }
  }, [threads, username, user]);

  return { userAndAuthorMatch, userThreads };
};

export default useFetchThreadsByAuthorId;
