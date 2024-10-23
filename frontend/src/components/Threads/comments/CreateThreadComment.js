import { useEffect, useState } from "react";
import axios from "axios";
import UseFetchProfile from "../../../hooks/userHooks/FetchProfile";

const CreateThreadComment = ({ threadId }) => {
  const [formData, setFormData] = useState({
    comment: "",
    author: "",
  });

  const { user, loading, error } = UseFetchProfile();

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        author: user.username,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://node-mongodb-api-4lo4.onrender.com/thread/${threadId}/comment`,
        {
          author: formData.author,
          comment: formData.comment,
        }
      );
      alert("Comment created successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-background text-text w-1/4 mx-auto text-center mt-8 rounded-lg">
      <h1 className="text-3xl font-bold pt-5 mb-6">Write your comment</h1>
      <div className=" text-dark flex justify-center items-center pb-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <textarea
              className="text-dark mb-4 h-20"
              placeholder="Write your comment here..."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p className="text-text">Author: {user.username}</p>
          </div>
          <div className="flex bg-info text-white p-2 rounded-lg mt-3 text-text hover:bg-infohover">
            <button type="submit">Create Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateThreadComment;
