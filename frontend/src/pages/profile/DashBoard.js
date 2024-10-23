import FetchThreadsAndComments from "../../components/Threads/comments/FetchThreadsCommentsByAuthorId";

const DashBoard = () => {
  return (
    <>
      <div className="bg-background text-text w-3/4 mx-auto text-center mt-8 rounded-lg">
        <FetchThreadsAndComments />
      </div>
    </>
  );
};
export default DashBoard;
