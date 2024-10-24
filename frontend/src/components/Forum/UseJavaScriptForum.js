import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/userHooks/UseAuth";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaScriptForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="h-screen p-6">
      {isLoggedIn ? (
        <div className="space-y-8">
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
