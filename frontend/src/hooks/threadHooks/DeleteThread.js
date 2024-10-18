import { useState, useEffect } from "react";
import axios from "axios";
import UseFetchThreads from "./UseThreads";

const useThreadListWithDelete = () => {
  const { threads, loading, error } = UseFetchThreads();
  const [fetchThreads, setFetchThreads] = useState(threads);

  useEffect(() => {
    setFetchThreads(threads);
  }, [threads]);

  const handleDelete = async (threadId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/thread/${threadId}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert(response.data.message);
        setFetchThreads((prev) =>
          prev.filter((thread) => thread._id !== threadId)
        );
        window.location.reload();
      } else {
        alert("Failed to delete thread");
      }
    } catch (err) {
      console.error("Error deleting thread:", err);
      alert("Error deleting thread.");
    }
  };

  return { fetchThreads, loading, error, handleDelete };
};

export default useThreadListWithDelete;
