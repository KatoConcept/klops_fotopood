// import { Link } from "react-router-dom";

function Home() {
  document.title = "Klõps | Avaleht";
  return (
    <section className="main-page">
      <div className="main-container view-width">
        <div className="text-area">
          <h1>Kõik Sinule ja Sinu fotode jaoks vajalik ühest kohast!</h1>
          <div className="slideshow-wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="../img/product-1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-1-2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="../img/product-1-3.jpg" alt="Third slide" />
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
          <a href="/products" className="btn check-products">Vaata tooteid</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
