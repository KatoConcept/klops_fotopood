// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-padding"></div>
      <div className="footer-container view-width">
        <a href="/">
          <img src="../img/logo2_png.png" height="30px" alt="" />
        </a>
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
