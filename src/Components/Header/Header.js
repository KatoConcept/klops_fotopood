// import { Link } from "react-router-dom";
import React, { Component } from 'react';

function Header() {

  // const burger = document.querySelector(".burger");
  // const sideDrawer = document.querySelector(".sideDrawer");
  // burger.addEventListener('click', () => {
  //   sideDrawer.classList.toggle('open');
  // });
  const sideDrawer = document.querySelector(".sideDrawer");
  function clickHandler() {
    document.querySelector(".sideDrawer").classList.toggle('open');
    document.querySelector(".line1").classList.toggle('open');
    document.querySelector(".line2").classList.toggle('open');
    document.querySelector(".line3").classList.toggle('open');
  }

  return (

    <nav className="navbar">
      <div className="navbar-container view-width">
      <div className="burger" onClick={clickHandler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <a href="/">
          <img src="../img/logo1_png.png" height="30px" alt="" />
        </a>
        <ul className="nav_list">
          <li className="nav_item">
            <a href="/" className="nav_link">
              AVALEHT
            </a>
          </li>
          <li className="nav_item">
            <a href="/products" className="nav_link">
              TOOTED
            </a>
          </li>
          <li className="nav_item">
            <a href="/about" className="nav_link">
              MEIST
            </a>
          </li>
          <li className="nav_item">
            <a href="/contact" className="nav_link">
              KONTAKT
            </a>
          </li>
        </ul>
        <li className="nav_item" id="shopping-cart">
          <a href="/shopping_cart" className="nav_link">
            <i className="fa fa-shopping-cart" id="shopping-icon"></i>
            OSTUKORV
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Header;
