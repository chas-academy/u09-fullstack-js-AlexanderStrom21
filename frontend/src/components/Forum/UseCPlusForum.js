import CreateThread from "../Threads/CreateThread";
import useAuth from "../../hooks/UseAuth";
import FetchThreadsById from "../../hooks/FetchThreadsById";

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
