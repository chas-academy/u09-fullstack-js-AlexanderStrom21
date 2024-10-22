import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchThreadComments = (threadId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreadComments = async () => {
      try {
        const response = await axios.get(
          `https://node-mongodb-api-4lo4.onrender.com/thread/${threadId}/comments`
        );
        setComments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching comments data");
        setLoading(false);
      }
    };

    if (threadId) {
      fetchThreadComments();
    }
  }, [threadId]);

  return { comments, loading, error };
};

export default UseFetchThreadComments;
