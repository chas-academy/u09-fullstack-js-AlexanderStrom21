import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/userHooks/UseAuth";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaScriptForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <CreateThread forumType="JavaScript" />
          <FetchThreadsById forumType="JavaScript" />
        </div>
      ) : (
        <FetchThreadsById forumType="JavaScript" />
      )}
    </div>
  );
};
export default UseJavaScriptForum;
