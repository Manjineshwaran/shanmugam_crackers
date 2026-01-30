import React from 'react';
import './SearchBar.css';

function SearchBar({ value, onChange, onRefresh }) {
  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <input
          type="search"
          className="search-input"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search products"
        />
        <button
          type="button"
          className="search-refresh"
          onClick={onRefresh}
          aria-label="Refresh"
        >
          ↻
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
