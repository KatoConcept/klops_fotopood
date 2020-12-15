import { Link } from "react-router-dom";

function Home() {
  document.title = "Klõps | Avaleht";
  return (
    <section className="main-page">
      <div className="main-container view-width">
        <div className="text-area">
          <h1>Kõik Sinule ja Sinu fotode jaoks vajalik ühest kohast!</h1>
          <div className="slideshow-wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../img/product-1.jpg" alt="1 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-2.jpg" alt="2 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-3.jpg" alt="3 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-4.jpg" alt="4 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-5.jpg" alt="5 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-6.jpg" alt="6 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-7.jpg" alt="7 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-8.jpg" alt="8 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-9.jpg" alt="9 slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-10.jpg" alt="10 slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <Link to="/products" className="btn check-products">Vaata tooteid</Link>
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
}

export default Home;
