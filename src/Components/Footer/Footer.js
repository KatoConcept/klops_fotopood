import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Footer() {
  const [backToTop, setBackToTop] = useState(false);

  const addBackToTop = () => {
    if (window.scrollY > 700) {
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  };

  function GoBackToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
    
  }

  window.addEventListener('scroll', addBackToTop);


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
      <div className={backToTop ? 'back-to-top-btn active' : 'back-to-top-btn'} onClick={GoBackToTop}><i class="fa fa-chevron-up"></i></div>
    </footer>
  );
};

export default Footer;
