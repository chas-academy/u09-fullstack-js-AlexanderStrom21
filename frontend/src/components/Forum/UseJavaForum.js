import { useAuth } from "../../hooks/authHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaForum = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="h-screen p-6">
      {isAuthenticated ? (
        <div className="space-y-8">
          <CreateThread forumType="Java" />
          <FetchThreadsById forumType="Java" />
        </div>
      ) : (
        <FetchThreadsById forumType="Java" />
      )}
    </div>
  );
};
export default UseJavaForum;
