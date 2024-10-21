import AllUsers from "../../components/AllUsers";
import UseFetchProfile from "../../hooks/userHooks/FetchProfile";
import RegisterAUser from "./RegisterUserAsAdmin";

const Profile = () => {
  const { user, loading, error } = UseFetchProfile();
  if (loading) {
    return <p>Loading profile...</p>;
  }

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

          {user.isAdmin && (
            <div>
              <h2>Admin Dashboard</h2>
              <AllUsers />
              <RegisterAUser />
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
