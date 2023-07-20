import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-card__details">
        <h3>{item.name}</h3>
        <p className="product-card__description">{item.description}</p>
        <p className="product-card__price">Current Price: ${item.price.toFixed(2)}</p>
        <div className="product-card__buttons">
          <button className="product-card__button" onClick={() => console.log('Bidding...')}>
            Place Bid
          </button>
          <button className="product-card__button" onClick={() => console.log('Add to Cart...')}>
            Add to Cart
          </button>
          <button className="product-card__button" onClick={() => console.log('View Details...')}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
