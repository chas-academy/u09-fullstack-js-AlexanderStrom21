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
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.isAdmin ? "Admin" : "User"}</p>

          {/* Render admin dashboard if user is admin */}
          {user.isAdmin && (
            <div>
              <h2>Admin Dashboard</h2>
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
