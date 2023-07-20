const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/path/to/your/ebay-logo.png" alt="eBay Logo" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands, and more" />
        <button type="button">Search</button>
      </div>
      <div className="navbar__account">
        <span className="navbar__account__text">Hi, Guest</span>
        <span className="navbar__account__link">Sign in</span>
        <span className="navbar__account__divider">|</span>
        <span className="navbar__account__link">Register</span>
        <span className="navbar__account__divider">|</span>
        <span className="navbar__account__link">Daily Deals</span>
      </div>
    </div>
  );
};

export default Navbar;
