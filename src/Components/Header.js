import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Logo from "../img/Logo2.png";
import Cart from "../img/cart.png";
import fullCart from "../img/full-cart.png";
import "../Components/Header.css";
import Login from "./Login";

function Header() {
  const cartProduct = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); // Will store only the user's name

  // Login Function
  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  // Logout Function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("loggedInUser");
  };

  // Function to amend cart display between full and empty
  const cartDisplay = () => {
    if (cartProduct.length === 0) {
      return (
        <li key="empty-cart">
          <img src={Cart} alt="Cart" className="cart-img" />
        </li>
      );
    } else {
      return (
        <li key="full-cart">
          <img src={fullCart} alt="Full Cart" className="cart-img" />
          {cartProduct.length}
        </li>
      );
    }
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo-img" />
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/store">
          <li>SHOP</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>

      <ul>
        <div className="sign-in">
          <Link to="/cart">{cartDisplay()}</Link>
          {/* If logged in remove registration btn*/}
          {!isLoggedIn && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}

          <div className="logout">
            {!isLoggedIn ? (
              <Login handleLogin={handleLogin} /> // Pass handleLogin to Login component
            ) : (
              <div className="login">
                <p className="welcome-msg">Welcome Back, {username}!</p>
                <Button variant="secondary" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Header;
