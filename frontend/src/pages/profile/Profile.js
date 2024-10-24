import AllUsers from "../../components/AllUsers";
import UseFetchProfile from "../../hooks/userHooks/FetchProfile";
import RegisterAUser from "./RegisterUserAsAdmin";

const Profile = () => {
  const { user, loading, error } = UseFetchProfile(); // Call the hook

  // Show loading message while fetching
  if (loading) {
    return <p className="text-center text-text mt-4">Loading profile...</p>;
  }

  // Handle errors from fetching
  if (error) {
    return <p className="text-center text-error mt-4">Error: {error}</p>;
  }

  return (
    <div className="flex flex-col self-center sm:w-screen sm:p-2 md:w-screen sm:max-w-sm w-screen md:p-0">
      {user ? (
        <div className="bg-background text-text h-fit text-center max-w-full mt-8 rounded-lg p-6 shadow-lg m-2 md:max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold">
            Welcome, {user.username}!
          </h1>
          <p className="mt-4 text-sm sm:text-base">Email: {user.email}</p>
          <p className="mt-2 text-sm sm:text-base">
            Role: {user.isAdmin ? "Admin" : "User"}
          </p>
        </div>
      ) : (
        <p className="text-center text-text mt-4">No user data found.</p>
      )}

      {user.isAdmin && (
        <div className="sm:max-w-screen md:max-w-screen lg:max-w-screen p-2 flex flex-col items-center">
          <AllUsers />
          <RegisterAUser />
        </div>
      )}
    </div>
  );
};

export default Profile;
