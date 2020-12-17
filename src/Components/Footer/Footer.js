import { Link } from "react-router-dom";
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-padding"></div>
      <div className="footer-container view-width">
        <Link to="/">
          <img src="../img/logo2_png.png" height="30px" alt="" />
        </Link>
        <p className="footer-text">
          Klõps OÜ | Pärnu mnt 57a, 10135 Tallinn | info@klops.ee
        </p>
        <p className="footer-text">© Klõps OÜ - kõik õigused kaitstud</p>
      </div>
      <div className="footer-padding"></div>
    </footer>
  );
};

export default Footer;
