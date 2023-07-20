import React, {useContext} from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import AuctionTimer from './components/AuctionTimer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import { UserContext } from './UserContext';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      {user ? (
        <UserProfile user={user} />
      ) : (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
      <Navbar />
      <Cart/>
      <AuctionTimer />

      <ItemList />

      {/* Your other components go here */}
    </div>
  );
};

export default App;
