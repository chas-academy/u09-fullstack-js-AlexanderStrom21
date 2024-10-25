import { useAuth } from "../../hooks/authHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaScriptForum = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="h-screen p-6">
      {isAuthenticated ? (
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
