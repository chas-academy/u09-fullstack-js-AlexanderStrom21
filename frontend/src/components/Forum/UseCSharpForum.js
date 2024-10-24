import useAuth from "../../hooks/userHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";
const UseCSharpForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="h-screen p-6">
      {isLoggedIn ? (
        <div className="space-y-8">
          <CreateThread forumType="CSharp" />
          <FetchThreadsById forumType="CSharp" />
        </div>
      ) : (
        <FetchThreadsById forumType="CSharp" />
      )}
    </div>
  );
};

export default UseCSharpForum;
