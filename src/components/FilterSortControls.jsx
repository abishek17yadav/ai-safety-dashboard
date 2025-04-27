import React from 'react';

function FilterSortControls({ filter, setFilter, sortOrder, setSortOrder }) {
  return (
    <div className="controls">
      <div className="filter">
        <label>Filter by Severity:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="sort">
        <label>Sort by Date:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortControls;
