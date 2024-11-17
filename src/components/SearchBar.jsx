import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

const SearchBar = ({ searchTerm, handleSearch, resources }) => {
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    if (resources) {
      const fuseInstance = new Fuse(resources, {
        keys: ['title', 'description', 'tags'],
      });
      setFuse(fuseInstance);
    }
  }, [resources]);

  const handleLocalSearch = (e) => {
    const localSearchTerm = e.target.value;
    handleSearch(localSearchTerm); // Call the parent handleSearch function
  };

  return (
    <input
      type="search"
      value={searchTerm}
      onChange={handleLocalSearch}
      placeholder="Search resources"
    />
  );
};

export default SearchBar;
