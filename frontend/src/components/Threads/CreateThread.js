import { useState } from "react";
import axios from "axios";

const CreateThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/threads", {
        title,
        content,
        author,
      });
      alert("Thread created successfully!");
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  return (
    <>
      <div className="grid justify-center">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Title on your thread:</label>
            <input
              className="text-black"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              className="text-black"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              className="text-black"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="bg-black size-fit p-1 rounded-lg flex ">
            <button type="submit">Create Thread</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateThread;
