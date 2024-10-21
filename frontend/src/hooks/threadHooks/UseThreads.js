import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchThreads = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("http://localhost:5000/threads");
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
