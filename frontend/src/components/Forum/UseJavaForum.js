import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/userHooks/UseAuth";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="h-screen p-6">
      {isLoggedIn ? (
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
