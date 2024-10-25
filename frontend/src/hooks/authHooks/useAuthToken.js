const useAuthToken = () => {
  const getToken = () => localStorage.getItem("token");

  return { getToken };
};

export default useAuthToken;
