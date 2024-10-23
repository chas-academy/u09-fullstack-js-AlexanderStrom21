import UseFetchThreadsByAuthorId from "../../hooks/threadHooks/FetchThreadsByAuthorId";
import useThreadListWithDelete from "../../hooks/threadHooks/DeleteThread";
import useAuth from "../../hooks/userHooks/UseAuth";

const ThreadsCreatedByUser = () => {
  const isLoggedIn = useAuth();
  const { userAndAuthorMatch, userThreads } = UseFetchThreadsByAuthorId();
  const { handleDelete } = useThreadListWithDelete();
  if (!isLoggedIn) return null;

  return (
    <div>
      {userAndAuthorMatch ? (
        <div className="bg-background text-text w-2/4 mx-auto text-center mt-8 rounded-lg">
          <h1 className="text-3xl font-bold pt-5 mb-6">Your Threads</h1>
          <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
            <div>
              {userThreads.length > 0 ? (
                userThreads.map((thread) => (
                  <div
                    className="bg-primary m-2 w-3/4 p-4 pt-2 rounded-lg"
                    key={thread._id}
                  >
                    <strong className="flex justify-self-start">
                      {thread.author}
                    </strong>
                    <h2 className="text-lg font-bold">{thread.title}</h2>
                    <p className="flex justify-self-start py-4">
                      {thread.content}
                    </p>
                    <div className="flex justify-between w-full ">
                      <small className="self-end">
                        Date:
                        {thread.date
                          ? new Date(thread.date).toLocaleString()
                          : "No Date Available"}
                      </small>
                      <button
                        className="px-4 py-2 bg-warning text-text rounded hover:bg-primaryhover"
                        onClick={() => handleDelete(thread._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No threads found.</p>
              )}
            </div>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ThreadsCreatedByUser;
