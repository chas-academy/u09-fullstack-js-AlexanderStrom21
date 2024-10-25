import { useState, useEffect, useRef } from "react";

const Dropdown = ({ trigger, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center">
        {trigger}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-secondary rounded-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
