import { useEffect, useState } from "react";
import UseFetchAllUsers from "../../hooks/searchHook/UseFetchAllUsers";
import useDebounce from "../../hooks/searchHook/SearchDebounce";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { filterUsers, loading, error } = UseFetchAllUsers();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 4) {
      const results = filterUsers(debouncedSearchTerm);
      setFilteredUsers(results);
    } else {
      setFilteredUsers([]);
    }
  }, [debouncedSearchTerm, filterUsers]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 rounded-md"
      />

      <div className="bg-secondary rounded-lg">
        {loading && <p className="p-4">Loading...</p>}
        {error && <p className="p-4 text-red-500">{error}</p>}
        {filteredUsers.length > 0
          ? filteredUsers.map((user) => (
              <div key={user.username} className="p-4">
                <p className="font-bold text-white">{user.username}</p>
              </div>
            ))
          : debouncedSearchTerm.length >= 4 &&
            !loading && (
              <p className="p-4 text-white">
                No user found with that username.
              </p>
            )}
      </div>
    </div>
  );
};

export default UserSearch;
