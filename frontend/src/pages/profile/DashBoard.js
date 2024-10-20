import CommentsCreatedByUser from "../../components/Threads/comments/CommentsCreatedByUser";
import ThreadsCreatedByUser from "../../components/Threads/ThreadsCreatedByUser";

const DashBoard = () => {
  return (
    <>
      <ThreadsCreatedByUser />
      <CommentsCreatedByUser />
    </>
  );
};
export default DashBoard;
