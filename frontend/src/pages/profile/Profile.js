import AllUsers from "../../components/AllUsers";
import UseFetchProfile from "../../hooks/userHooks/FetchProfile";
import RegisterAUser from "./RegisterUserAsAdmin";

const Profile = () => {
  const { user, loading, error } = UseFetchProfile(); // Call the hook

  // Show loading message while fetching
  if (loading) {
    return <p>Loading profile...</p>;
  }

  // Handle errors from fetching
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        {user ? (
          <div className="bg-background text-text w-2/4 mx-auto text-center mt-8 rounded-lg p-6">
            <h1 className="text-xl font-bold">Welcome, {user.username}!</h1>
            <p className="mt-2">Email: {user.email}</p>
            <p className="mt-2">Role: {user.isAdmin ? "Admin" : "User"}</p>
          </div>
        ) : (
          <p>No user data found.</p>
        )}

        {user && user.isAdmin && (
          <div className="mt-8 w-2/4">
            <div className="bg-background text-text text-center rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">Admin Actions</h2>
              <div className="m-4 p-6 rounded-lg bg-background text-text pb-5">
                <AllUsers />
              </div>
              <div className="m-4 p-6 rounded-lg bg-background text-text pb-5">
                <RegisterAUser />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
