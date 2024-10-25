import { useAuth } from "../../hooks/authHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseCPlusForum = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="h-screen p-6">
      {isAuthenticated ? (
        <div className="space-y-8">
          <CreateThread forumType="CPlus" />
          <FetchThreadsById forumType="CPlus" />
        </div>
      ) : (
        <FetchThreadsById forumType="CPlus" />
      )}
    </div>
  );
};
export default UseCPlusForum;
