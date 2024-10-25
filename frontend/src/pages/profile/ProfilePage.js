import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllUsers from "../../components/AllUsers";
import useFetchProfile from "../../hooks/userHooks/useFetchProfile";
import RegisterAUser from "./RegisterUserAsAdmin";

const ProfilePage = () => {
  const { user, loading, error } = useFetchProfile();
  const navigate = useNavigate();

  // Redirect to login if no user is found
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <p className="text-center text-text mt-4">Loading ProfilePage...</p>;
  }

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

      {user?.isAdmin && (
        <div className="sm:max-w-screen md:max-w-screen lg:max-w-screen p-2 flex flex-col items-center">
          <AllUsers />
          <RegisterAUser />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
