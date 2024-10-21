import { useState, useEffect } from "react";
import axios from "axios";
import UseFetchThreadComments from "./UseFetchThreadComments";
import UseFetchThreads from "../threadHooks/UseThreads";

const useCommentDelete = () => {
  const {
    threads,
    loading: loadingThreads,
    error: errorThreads,
  } = UseFetchThreads();
  const {
    comments,
    loading: commentsLoading,
    error: commentsError,
  } = UseFetchThreadComments();
  const [fetchThreads, setFetchThreads] = useState(threads);
  const [fetchComments, setFetchComments] = useState(comments);

  useEffect(() => {
    setFetchThreads(threads);
  }, [threads]);

  useEffect(() => {
    setFetchComments(comments);
  }, [comments]);

  const handleDelete = async (threadId, commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/thread/${threadId}/comment/${commentId}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert(response.data.message);
        setFetchComments((prev) =>
          prev.filter((comment) => comment._id !== commentId)
        );
        setFetchThreads((prev) =>
          prev.filter((thread) => thread._id !== threadId)
        );
        window.location.reload();
      } else {
        alert("Failed to delete Comment");
      }
    } catch (err) {
      console.error("Error deleting Comment:", err);
      alert("Error deleting Comment.");
    }
  };

  return {
    fetchThreads,
    fetchComments,
    errorThreads,
    loadingThreads,
    commentsLoading,
    commentsError,
    handleDelete,
  };
};

export default useCommentDelete;
