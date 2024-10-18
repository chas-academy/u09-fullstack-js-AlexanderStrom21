import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/userHooks/UseAuth";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseJavaForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
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
