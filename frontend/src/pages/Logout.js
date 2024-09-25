const Logout = () => {
  const handleLogout = async () => {
    const response = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include", // Include cookies
    });

    if (response.ok) {
      alert("Logout successful");
      // Optionally navigate to login or home page
    } else {
      alert("Logout failed");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
