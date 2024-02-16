import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchHeader = () => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm ml-4 w-2/4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <span className="text-gray-500 sm:text-sm"><SearchIcon /></span>
      </div>
      <input 
        type="text" 
        name="Search" 
        id="Search" 
        className="block w-full rounded-md border-0 py-1.5 pl-10 
        pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
        focus:outline-none"
        placeholder='Search...'
      />
    </div>
  );
};

export default SearchHeader;