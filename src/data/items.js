const items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is the first item description.',
      price: 50.00,
      bids: [
        { bidder: 'User A', amount: 50.00 },
        { bidder: 'User B', amount: 55.00 },
      ],
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'This is the second item description.',
      price: 30.00,
      bids: [
        { bidder: 'User C', amount: 30.00 },
        { bidder: 'User D', amount: 32.50 },
      ],
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'This is the third item description.',
      price: 100.00,
      bids: [
        { bidder: 'User E', amount: 100.00 },
        { bidder: 'User F', amount: 105.00 },
      ],
    },
  ];
  
  export default items;
  