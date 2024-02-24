import React from 'react';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <input
        type="number"
        className="border border-gray-400 rounded-md px-4 py-2 w-full max-w-md"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
