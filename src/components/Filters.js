import React, { useState } from 'react';

const Filters = ({ onApplyFilters }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [itemCondition, setItemCondition] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      location,
      itemCondition,
    };

    onApplyFilters(filters);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div>
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
        />
      </div>
      <div>
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
      </div>
      <div>
        <label>Item Condition:</label>
        <input
          type="text"
          value={itemCondition}
          onChange={(e) => setItemCondition(e.target.value)}
          placeholder="Item Condition"
        />
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
