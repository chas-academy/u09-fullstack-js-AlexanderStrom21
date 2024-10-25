const UserItem = ({ user, handleDelete }) => {
  console.log("Deleting user with ID:", user._id); // Debugging line to verify user ID

  return (
    <li
      className="bg-primary text-text p-4 rounded-lg flex justify-between items-center w-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mb-4"
      key={user._id}
    >
      <span className="text-base sm:text-lg md:text-xl font-semibold mb-2 break-all mr-4">
        {user.username}
      </span>
      <button
        className="bg-warning hover:bg-error text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-300 ease-in-out"
        onClick={() => handleDelete(user._id)}
      >
        Delete
      </button>
    </li>
  );
};

export default UserItem;
