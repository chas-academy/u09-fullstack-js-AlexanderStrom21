import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/threads');
        setThreads(response.data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div >
      <h1>Forum Threads</h1>
      {threads.map((thread) => (
        <div key={thread._id}>
          <h2>{thread.title}</h2>
          <p>{thread.content}</p>
          <p><strong>Author:</strong> {thread.author}</p>
          <p><strong>Date:</strong> {new Date(thread.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
