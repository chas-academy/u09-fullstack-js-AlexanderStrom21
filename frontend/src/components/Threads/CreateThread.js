import { useEffect, useState } from "react";
import axios from "axios";
import UseFetchProfile from "../../hooks/FetchProfile";

const CreateThread = ({ forumType }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    forumType: forumType,
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

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/thread", formData);
      alert("Thread created successfully in the " + forumType + " forum!");
      //reset without windows.relode
      setFormData({
        title: "",
        content: "",
        author: user.username,
        forumType: forumType,
      });
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  return (
    <>
      <div className="bg-cyan-950 text-white w-2/4 mx-auto text-center mt-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-5 mb-6">
          Create Thread in {forumType} Forum
        </h1>
        <ul className="space-y-4 text-black flex flex-col items-center pb-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="text-black"
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
                className="text-black mb-4 w-full h-20"
                placeholder="Content"
                type="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p className="text-white">Author: {user.username}</p>
            </div>
            <div className="flex bg-gray-500 p-2 rounded-lg mt-3 text-white">
              <button type="submit">Create Thread</button>
            </div>
          </form>
        </ul>
      </div>
    </>
  );
};

export default CreateThread;
