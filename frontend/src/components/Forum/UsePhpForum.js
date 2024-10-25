import { useAuth } from "../../hooks/authHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UsePhpForum = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="h-screen p-6">
      {isAuthenticated ? (
        <div className="space-y-8">
          <CreateThread forumType="Php" />
          <FetchThreadsById forumType="Php" />
        </div>
      ) : (
        <FetchThreadsById forumType="Php" />
      )}
    </div>
  );
};
export default UsePhpForum;
