import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className="form-outline">
      <input
        type="text"
        name="query"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        style={{ marginBottom: 20 }}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
