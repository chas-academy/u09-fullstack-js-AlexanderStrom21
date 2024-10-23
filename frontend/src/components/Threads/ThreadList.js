import UseFetchThreads from "../../hooks/threadHooks/UseThreads";

const ThreadList = () => {
  const { threads, loading, error } = UseFetchThreads();

  if (loading) {
    return <p>Loading threads...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="bg-primary text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">Forum Threads</h1>
        <ul className="space-y-4 text-dark flex flex-col items-center pb-5">
          {threads.map((thread) => {
            return (
              <div
                className="bg-secondary m-2 w-3/4 p-4 pt-2 rounded-lg"
                key={thread._id}
              >
                <strong className="flex justify-self-start">
                  {thread.author}
                </strong>
                <h2 className="text-lg font-bold">{thread.title}</h2>
                <p className="flex justify-self-start py-4">{thread.content}</p>
                <div className="flex justify-between w-full ">
                  <small className="self-end">
                    Date:
                    {thread.date
                      ? new Date(thread.date).toLocaleString()
                      : "No Date Available"}
                  </small>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ThreadList;
