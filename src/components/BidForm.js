import React, { useState } from 'react';

const BidForm = ({ item }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedBidAmount = parseFloat(bidAmount);
    if (isNaN(parsedBidAmount) || parsedBidAmount <= 0) {
      setErrorMessage('Please enter a valid bid amount.');
      return;
    }

    // Here you can implement the logic to process the bid.
    // For simplicity, we'll just update the item's bid data in this example.
    item.bids.push({ bidder: 'User X', amount: parsedBidAmount });

    // Clear the bid amount input field after successful submission.
    setBidAmount('');
  };

  return (
    <form className="bid-form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter your bid amount"
        value={bidAmount}
        onChange={handleBidChange}
      />
      <button type="submit">Place Bid</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default BidForm;
