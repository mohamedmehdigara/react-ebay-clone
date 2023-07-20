import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import AuctionTimer from './components/AuctionTimer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <AuctionTimer />

      <ItemList />

      {/* Your other components go here */}
    </div>
  );
};

export default App;
