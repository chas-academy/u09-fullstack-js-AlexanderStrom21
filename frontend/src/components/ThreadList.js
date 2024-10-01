import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/threads");
        setThreads(response.data);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div>
      <h1>Forum Threads</h1>
      {threads.map((thread) => (
        <div key={thread._id}>
          <h2>{thread.title}</h2>
          <p>{thread.content}</p>
          <p>
            <strong>Author:</strong> {thread.author}
          </p>
          <p>
            <strong>Date:</strong> {new Date(thread.date).toLocaleString()}
          </p>
          <NavLink to={`/ThreadComment/${thread._id}`}>
            <div className="flex bg-gray-500 p-2 rounded-lg mt-3">
              <button type="submit">Comment</button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
