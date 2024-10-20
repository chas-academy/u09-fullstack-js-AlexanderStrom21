import useFetchCommentsByAuthorId from "../../../hooks/commentHooks/UseFetchCommentsByAuthorId";
import useThreadListWithDelete from "../../../hooks/threadHooks/DeleteThread";
import useAuth from "../../../hooks/userHooks/UseAuth";

const CommentsCreatedByUser = () => {
  const isLoggedIn = useAuth();
  const { userCommentsAndAuthorMatch, userThreadComments, loading, error } =
    useFetchCommentsByAuthorId();
  const { handleDelete } = useThreadListWithDelete();

  if (!isLoggedIn) return null;

  if (loading) return <p>Loading your comments...</p>;
  if (error) return <p>Error fetching comments: {error}</p>;

  return (
    <div>
      {userCommentsAndAuthorMatch ? (
        <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
          <h1 className="text-3xl font-bold pt-5 mb-6">Your Comments</h1>
          <ul className="space-y-4 text-black flex flex-col items-center pb-5">
            {userThreadComments.length > 0 ? (
              userThreadComments.map((comment) => (
                <div
                  className="bg-gray-100 m-2 w-3/4 p-4 pt-2 rounded-lg"
                  key={comment._id}
                >
                  <strong className="flex justify-self-start">
                    {comment.author}
                  </strong>
                  <p className="flex justify-self-start py-4">
                    {comment.comment}
                  </p>
                  <div className="flex justify-between w-full">
                    <small className="self-end">
                      Date:{" "}
                      {comment.date
                        ? new Date(comment.date).toLocaleString()
                        : "No Date Available"}
                    </small>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDelete(comment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments found.</p>
            )}
          </ul>
        </div>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
};

export default CommentsCreatedByUser;
