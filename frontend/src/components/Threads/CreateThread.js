import { useEffect, useState } from "react";
import axios from "axios";
import UseFetchProfile from "../../hooks/userHooks/FetchProfile";

const CreateThread = ({ forumType }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    forumType,
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
        "https://node-mongodb-api-4lo4.onrender.com/thread",
        formData
      );
      alert("Thread created successfully in the " + forumType + " forum!");
      window.location.reload();
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-background text-text w-full max-w-lg text-center rounded-lg p-6 lg:max-w-screen-lg">
      <h1 className="text-2xl font-bold pt-5 mb-6">
        Create Thread in {forumType} Forum
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            className="w-full p-3 text-dark border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-info"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            className="w-full p-3 text-dark border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-info h-24 resize-none"
            placeholder="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">Author: {user.username}</p>
        </div>
        <div>
          <button
            type="submit"
            className="p-5 bg-info rounded-lg text-white font-semibold hover:bg-infohover transition duration-300"
          >
            Create Thread
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateThread;
