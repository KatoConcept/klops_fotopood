import { Link } from "react-router-dom";
import React from 'react';
import clickHandler from '../NavbarAnimation/NavbarAnimation'

function Header() {
  return (
    <nav className="navbar">
      <div className="burger" onClick={clickHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navbar-container view-width">

        <Link to="/" className="side-drawer-logo">
          <img src="../img/logo1_png.png" height="30px" alt="" onClick={clickHandler} />
        </Link>
        <Link to="/" className="normal-menu-logo">
          <img src="../img/logo1_png.png" height="30px" alt="" />
        </Link>
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/" className="nav_link">
              AVALEHT
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/products" className="nav_link">
              TOOTED
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/about" className="nav_link">
              MEIST
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/contact" className="nav_link">
              KONTAKT
            </Link>
          </li>
        </ul>
        <li className="nav_item" id="shopping-cart">
          <Link to="/shopping_cart" className="nav_link">
            <i className="fa fa-shopping-cart" id="shopping-icon"></i>
            OSTUKORV
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Header;