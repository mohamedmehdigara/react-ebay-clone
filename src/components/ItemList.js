import React, { useState } from 'react';
import Categories from './Categories';
import Filters from './Filters';

const ItemList = () => {
  // Sample data for categories (you can replace this with your actual categories)
  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Sporting Goods'];

  // Sample data for items (you can replace this with your actual items)
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Sample Item 1',
      description: 'This is a sample item description.',
      price: 99.99,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Sample Item 2',
      description: 'This is another sample item description.',
      price: 49.99,
      category: 'Fashion',
    },
    // ... more items ...
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset pagination to the first page when changing category or filters.
    // Implement the logic to filter items by category and filters here.
  };

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    setCurrentPage(1); // Reset pagination to the first page when changing category or filters.
    // Implement the logic to filter items by category and filters here.
  };

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="item-list">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Filters onApplyFilters={handleApplyFilters} />
      <div className="items-container">
        {currentItems.map((item) => (
          // Render items here
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            {/* Add other item details */}
            <button>Place Bid</button>
            <button>Add to Cart</button>
            <button>View Details</button>
          </div>
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= items.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemList;
