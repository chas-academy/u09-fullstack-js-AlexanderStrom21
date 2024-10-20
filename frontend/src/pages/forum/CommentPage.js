import GetOneThread from "../../components/Threads/GetOneThread";
import CreateThreadComment from "../../components/Threads/ThreadComment";
import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { id } = useParams(); // Assume the thread ID is in the URL

  return (
    <>
      <GetOneThread id={id} />
      <CreateThreadComment threadId={id} />
    </>
  );
};

export default CommentPage;
