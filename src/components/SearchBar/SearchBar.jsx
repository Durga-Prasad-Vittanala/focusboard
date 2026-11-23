
import { Search, X } from "lucide-react";

import "./SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">

      <Search size={18} className="search-icon" />

      <input
        type="text"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search tasks by title"
      />

      {searchTerm && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}

    </div>
  );
}

export default SearchBar;

