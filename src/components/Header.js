import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/amazone-logo.png";
import searchIcon from "../images/icons/search-icon.png";
import cartIcon from "../images/icons/cart-icon.png";
import "./Header.css";
import { useAuth } from '../Context/GlobalState';
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <header className="main-header">
      {/* Logo Section */}
      <div className="header-section logo-section">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Amazon Logo" />
        </Link>
      </div>

      {/* Search Section */}
      <div className='header-search'>
        <input className='header-searchInput' type="text"/>
        <img className='header-searchIcon' src={searchIcon} alt = "Search Icon" />
      </div>

      {/* Navigation Section */}
      <nav className="header-section nav-section">
        {/* Authentication Section */}
        <Link to={!user && "/login"} className="header-option" onClick={handleAuthentication}>
          <div className="header-option__text">
            <span className="header-option__lineOne">Hello, {user ? user.email : "Guest"}</span>
            <span className="header-option__lineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        {/* Orders Section */}
        <Link to="/orders" className="header-option">
          <div className="header-option__text">
            <span className="header-option__lineOne">Returns</span>
            <span className="header-option__lineTwo">& Orders</span>
          </div>
        </Link>

        {/* Prime Section */}
        <div className="header-option">
          <div className="header-option__text">
            <span className="header-option__lineOne">Your</span>
            <span className="header-option__lineTwo">Prime</span>
          </div>
        </div>

        {/* Basket Section */}
        <Link to="/checkout" className="header-optionBasket">
          <img src={cartIcon} className="basket-icon" alt="Cart Icon" />
          <span className="header-basketCount">{basket?.length}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
