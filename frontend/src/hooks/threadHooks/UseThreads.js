import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchThreads = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("https://node-mongodb-api-4lo4.onrender.com/threads");
        setThreads(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchThreads();
  }, []);

  return { threads, loading, error, setThreads };
};

export default UseFetchThreads;
