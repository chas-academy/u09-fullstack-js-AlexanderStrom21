import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetThreadIdButton = ({ threadId }) => {
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await axios.get(
          `https://node-mongodb-api-4lo4.onrender.com/thread/${threadId}`
        );
        setThread(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching thread data");
        setLoading(false);
      }
    };

    if (threadId) {
      fetchThread();
    }
  }, [threadId]);

  const handleCommentPage = async (e) => {
    e.preventDefault();
    try {
      if (thread) {
        navigate(`/commentPage/${threadId}`);
      } else {
        alert("Error: No thread found!");
      }
    } catch (error) {
      console.error("Error: Could not find thread", error);
    }
  };

  if (loading) {
    return <p>Loading thread...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <button
      type="button"
      className="bg-info text-text rounded-lg px-3 py-1 hover:bg-primaryhover"
      onClick={handleCommentPage}
    >
      Comment
    </button>
  );
};

export default GetThreadIdButton;
