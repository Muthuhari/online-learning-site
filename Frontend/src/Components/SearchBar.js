import React from "react";
function SearchBar({ value, onChange, onSearch, placeholder = "Search here..." }) {
  return (
    <div className="input-group" style={{ maxWidth: "400px", width: "100%" }}>
      <span className="input-group-text bg-light border rounded-start">
        <i className="fas fa-search text-dark"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name="search"
      />
      <button
        onClick={onSearch}
        className="custom-search-btn ms-2 rounded"
        style={{ height: "38px" }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
