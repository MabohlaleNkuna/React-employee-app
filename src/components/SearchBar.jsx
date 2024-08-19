import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by name or department"
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
