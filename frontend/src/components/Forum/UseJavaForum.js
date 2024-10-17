import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/UseAuth";
import FetchThreadsById from "../../hooks/FetchThreadsById";

const UseJavaForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      <>
        {isLoggedIn ? (
          <div>
            <CreateThread forumType="Java" />
            <FetchThreadsById forumType="Java" />
          </div>
        ) : (
          <FetchThreadsById forumType="Java" />
        )}
      </>
    </div>
  );
};
export default UseJavaForum;
