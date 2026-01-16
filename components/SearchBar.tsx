
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative group">
      <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brandRed transition-colors"></i>
      <input
        type="text"
        placeholder="Search for trucks, cargo or routes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandRed/20 focus:border-brandRed transition-all"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brandLightBlue">
        <i className="fa-solid fa-sliders"></i>
      </button>
    </div>
  );
};

export default SearchBar;
