import React from 'react';
import items from '../data/items';
import BidForm from './BidForm';



const ItemList = () => {
    return (
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
                      <BidForm item={item} />

            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Current Price: ${item.price.toFixed(2)}</p>
            <ul>
              {item.bids.map((bid, index) => (
                <li key={index}>{bid.bidder} bid ${bid.amount.toFixed(2)}</li>
              ))}
            </ul>
            <button>Place Bid</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  