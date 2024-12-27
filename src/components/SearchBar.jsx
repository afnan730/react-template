import React from 'react';


const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
      />
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19a8 8 0 100-16 8 8 0 000 16zm10-2l-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
