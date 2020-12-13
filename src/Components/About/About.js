import { Link } from "react-router-dom";

function About() {
    document.title = "Klõps | Meie";
  return (
    <footer class="footer">
      <div class="footer-container">
        <Link to="/">
          <img src="./img/logo2_png.png" height="30px" alt="" />
        </Link>
        <p class="footer-text">
          Klõps OÜ | Pärnu mnt 57a, 10135 Tallinn | info@klops.ee
        </p>
        <p class="footer-text">© Klõps OÜ - kõik õigused kaitstud</p>
      </div>
    </footer>
  );
};

export default About;