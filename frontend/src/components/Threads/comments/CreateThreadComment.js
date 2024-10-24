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
    <div className="bg-background text-text w-full max-w-lg mx-auto text-center mt-8 rounded-lg p-6 mb-10 lg:max-w-screen-sm">
      <h1 className="text-2xl font-bold mb-6">Write your comment</h1>
      <div className="text-dark flex justify-center items-center pb-5">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <textarea
              className="w-full text-dark p-2 rounded-lg border-2 border-gray-300"
              placeholder="Write your comment here..."
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <p className="text-text">Author: {user.username}</p>
          </div>

          <button
            type="submit"
            className="bg-info text-white py-2 px-4 rounded-lg hover:bg-infohover transition duration-300"
          >
            Create Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateThreadComment;
