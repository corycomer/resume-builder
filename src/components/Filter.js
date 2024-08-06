// src/components/Filter.js
import React from 'react';

function Filter({ setFilter }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Enter tag to filter"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;

