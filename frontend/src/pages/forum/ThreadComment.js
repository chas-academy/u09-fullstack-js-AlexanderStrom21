import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThreadComment = () => {
  const { id } = useParams(); // Get thread ID from the URL
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/threads/${id}`
        );
        setThread(response.data);
        setLoading(false); // Stop loading when the data is fetched
      } catch (error) {
        console.error("Error fetching thread:", error);
        setLoading(false);
      }
    };

    fetchThread();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!thread) {
    return <div>Thread not found</div>;
  }

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <p>
        <strong>Author:</strong> {thread.author}
      </p>
      <p>
        <strong>Date:</strong> {new Date(thread.date).toLocaleString()}
      </p>

      {/* Add comment form or display comments here */}
    </div>
  );
};

export default ThreadComment;
