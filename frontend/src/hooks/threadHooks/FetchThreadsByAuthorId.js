import { useEffect, useState } from "react";
import UseFetchProfile from "../userHooks/FetchProfile";
import UseFetchThreads from "./UseThreads";

const useFetchThreadsByAuthorId = () => {
  const { threads } = UseFetchThreads();
  const { user } = UseFetchProfile();
  const [userThreads, setUserThreads] = useState([]);
  const [userAndAuthorMatch, setUserAndAuthorMatch] = useState(false);
  const username = user?.username;

  useEffect(() => {
    if (threads && threads.length > 0) {
      const filteredThreads = threads.filter(thread => thread.author === username);
      setUserThreads(filteredThreads);
      setUserAndAuthorMatch(filteredThreads.length > 0);
    }
  }, [threads, username]);

  return { userAndAuthorMatch, userThreads };
};

export default useFetchThreadsByAuthorId;
