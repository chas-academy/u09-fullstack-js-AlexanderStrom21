import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ trigger, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Element (e.g., Profile Logo, Button, etc.) */}
      <button onClick={toggleDropdown} className="flex items-center">
        {trigger}
      </button>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
