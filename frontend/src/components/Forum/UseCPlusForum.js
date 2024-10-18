import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/userHooks/UseAuth";
import FetchThreadsById from "../Threads/FetchThreadsById";

const UseCPlusForum = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      <>
        {isLoggedIn ? (
          <div>
            <CreateThread forumType="CPlus" />
            <FetchThreadsById forumType="CPlus" />
          </div>
        ) : (
          <FetchThreadsById forumType="CPlus" />
        )}
      </>
    </div>
  );
};
export default UseCPlusForum;
