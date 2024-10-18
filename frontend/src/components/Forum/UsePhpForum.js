import useAuth from "../../hooks/userHooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UsePhpForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
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
