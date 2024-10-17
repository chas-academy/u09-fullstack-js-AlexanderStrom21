import useAuth from "../../hooks/UseAuth";
import CreateThread from "../Threads/CreateThread";
import FetchThreadsById from "../../hooks/FetchThreadsById";
const UseCSharpForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      <>
        {isLoggedIn ? (
          <div>
            <CreateThread forumType="CSharp" />
            <FetchThreadsById forumType="CSharp" />
          </div>
        ) : (
          <FetchThreadsById forumType="CSharp" />
        )}
      </>
    </div>
  );
};

export default UseCSharpForum;
