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
    <div className="bg-primary text-text w-6/6 mx-auto text-center mt-8 pt-5 pb-5 rounded-lg">
      {user ? (
        <div className="m-4 p-6 rounded-lg bg-primary">
          <h1 className="text-xl font-bold">Welcome, {user.username}!</h1>
          <p className="mt-s2">Email: {user.email}</p>
          <p className="mt-2">Role: {user.isAdmin ? "Admin" : "User"}</p>

          {/* Render admin dashboard if user is admin */}
          {user.isAdmin && (
            <div>
              <AllUsers />
              <RegisterAUser />
            </div>
          )}
        </div>
      ) : (
        <p>No user data found.</p> // Handle case where user data is null
      )}
    </div>
  );
};

export default Profile;
