import React from "react";

function SearchResult() {
  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center">
        <h1 className="display-4">Public Library</h1>
        <button className="btn btn-success">Sign out</button>
      </header>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search for books..."
          className="form-control"
        />
        <div className="mt-4">{/* Map through search results */}</div>
      </div>
    </div>
  );
}

export default SearchResult;
